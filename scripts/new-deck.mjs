import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function titleFromSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

const rawArgs = process.argv.slice(2)
const positional = []
const flags = {}
for (let i = 0; i < rawArgs.length; i += 1) {
  const token = rawArgs[i]
  if (token.startsWith('--')) {
    const key = token.slice(2)
    const next = rawArgs[i + 1]
    if (!next || next.startsWith('--')) {
      flags[key] = true
    } else {
      flags[key] = next
      i += 1
    }
  } else {
    positional.push(token)
  }
}

const input = positional.join(' ').trim() || flags.slug || flags.title
if (!input) {
  console.error('Usage: npm run new-deck -- <slug-or-title> [--title "Custom Title"] [--description "..."] [--purpose "..."] [--audience "..."]')
  process.exit(1)
}

const slug = slugify(flags.slug || input)
if (!slug) {
  console.error('Could not derive a valid slug.')
  process.exit(1)
}

const title = (flags.title || titleFromSlug(slug)).trim()
const description = (flags.description || `Presentation about ${title} for Data-Espresso`).trim()
const purpose = (flags.purpose || `อธิบายเรื่อง ${title} ให้เข้าใจง่ายและเอาไปใช้ต่อได้ทันที`).trim()
const audience = (flags.audience || 'ทีมธุรกิจ ผู้บริหาร หรือผู้เรียนที่เกี่ยวข้อง').trim()

const deckPath = join(root, 'decks', `${slug}.md`)
if (existsSync(deckPath)) {
  console.error(`Deck already exists: decks/${slug}.md`)
  process.exit(1)
}

const decksJsonPath = join(root, 'decks.json')
const decks = JSON.parse(await readFile(decksJsonPath, 'utf8'))
if (decks.some(deck => deck.slug === slug)) {
  console.error(`Slug already exists in decks.json: ${slug}`)
  process.exit(1)
}

const deckTemplate = `---
theme: ../theme/data-espresso-theme
title: ${title}
info: ${description}
layout: cover
background: '#101010'
---

<h1 class="de-hero-title">${title.replace(/ /g, ' <br>')}</h1>

<div class="de-hero-subtitle">
${purpose}
</div>

<div class="de-hero-meta">
  <div class="de-chip">☕ Data-Espresso</div>
  <div class="de-chip">🎯 ${audience}</div>
  <div class="de-chip">🚀 Practical AI</div>
</div>

---
layout: section
---

# ทำไมเรื่องนี้สำคัญ

อธิบายว่าหัวข้อนี้สำคัญกับคนฟังอย่างไร และคาดหวังว่าเขาจะได้อะไรจาก deck นี้

---

<div class="de-slide-header">
  <div class="de-slide-index">01 · Key ideas</div>
  <div class="de-kicker">#สรุป</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>ประเด็นหลัก</h2>
    <ul>
      <li>ประเด็นสำคัญข้อที่ 1</li>
      <li>ประเด็นสำคัญข้อที่ 2</li>
      <li>ประเด็นสำคัญข้อที่ 3</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>💡 Insight</h2>
    <p>ใส่มุมมองหรือข้อสังเกตสำคัญที่ทำให้ deck นี้น่าจำ</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">02 · Practical framing</div>
  <div class="de-statement">เปลี่ยนหัวข้อนี้ให้เป็นสิ่งที่เอาไปใช้ต่อได้จริง</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric">
    <div class="label">Step 1</div>
    <div class="value">Context</div>
    <div>เริ่มจากปัญหาหรือโอกาสที่ชัดเจน</div>
  </div>
  <div class="de-metric">
    <div class="label">Step 2</div>
    <div class="value">Design</div>
    <div>จัด framework หรือวิธีคิดให้นำไปใช้ได้</div>
  </div>
  <div class="de-metric">
    <div class="label">Step 3</div>
    <div class="value">Action</div>
    <div>จบด้วย next step ที่ทำต่อได้เลย</div>
  </div>
</div>

---
layout: end
---

# ขอบคุณครับ

สรุปให้สั้นที่สุด: หัวข้อนี้จะมีค่าจริงก็ต่อเมื่อคุณเอาไปแปลงเป็นการลงมือทำที่ชัด วัดผลได้ และทำซ้ำได้
`

await writeFile(deckPath, deckTemplate)

decks.push({
  slug,
  title,
  description,
  file: `decks/${slug}.md`,
})
await writeFile(decksJsonPath, JSON.stringify(decks, null, 2) + '\n')

console.log(`Created decks/${slug}.md`)
console.log(`Updated decks.json with slug: ${slug}`)
console.log(`URL after deploy: https://slides.app.data-espresso.com/${slug}/`)
