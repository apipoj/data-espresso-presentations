import { mkdir, readFile, writeFile, rm, cp } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distDir = join(root, 'dist')
const tempDir = '/tmp/data-espresso-slidev-build'
const decks = JSON.parse(await readFile(join(root, 'decks.json'), 'utf8'))

await rm(distDir, { recursive: true, force: true })
await rm(tempDir, { recursive: true, force: true })
await mkdir(distDir, { recursive: true })
await mkdir(tempDir, { recursive: true })

for (const deck of decks) {
  const tempOut = join(tempDir, deck.slug)
  await new Promise((resolvePromise, rejectPromise) => {
    const child = spawn('npm', [
      'exec', 'slidev', '--', 'build', deck.file,
      '--out', tempOut,
      '--base', `/${deck.slug}/`,
      '--without-notes'
    ], {
      cwd: root,
      stdio: 'inherit',
      shell: false,
    })
    child.on('exit', (code) => {
      if (code === 0) resolvePromise()
      else rejectPromise(new Error(`Build failed for ${deck.slug} with exit code ${code}`))
    })
  })
  await cp(tempOut, join(distDir, deck.slug), { recursive: true })
}

const cards = decks.map(deck => `
      <a class="card" href="/${deck.slug}/">
        <div class="eyebrow">Data-Espresso Presentation</div>
        <h2>${deck.title}</h2>
        <p>${deck.description}</p>
        <div class="path">/${deck.slug}/</div>
      </a>`).join('')

const html = `<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Data-Espresso Presentations</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --white: #ffffff;
      --russian-violet: #301e45;
      --rich-black: #18222d;
      --copper: #b67b25;
      --rose-red: #c81559;
      --thistle: #dac3da;
      --gradient-dark: linear-gradient(160deg, #1a1028 0%, #301e45 40%, #18222d 100%);
      --gradient-accent: linear-gradient(135deg, #b67b25, #c81559);
      --gradient-light: linear-gradient(135deg, #ffffff 0%, #f5f0f8 50%, #ede5f0 100%);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: 'Noto Sans Thai', sans-serif;
      color: var(--rich-black);
      background: var(--gradient-light);
    }
    .hero {
      background: var(--gradient-dark);
      color: white;
      padding: 72px 24px 104px;
      position: relative;
      overflow: hidden;
    }
    .hero::after {
      content: '';
      position: absolute;
      inset: auto -10% -120px -10%;
      height: 220px;
      background: var(--white);
      border-radius: 50% 50% 0 0;
      opacity: 0.96;
    }
    .hero-inner, .content {
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .badge {
      display: inline-flex;
      gap: 8px;
      align-items: center;
      border: 1px solid rgba(218,195,218,0.4);
      border-radius: 999px;
      padding: 10px 16px;
      color: var(--thistle);
      margin-bottom: 18px;
      font-size: 14px;
    }
    h1 {
      margin: 0;
      font-size: clamp(2.35rem, 6vw, 5rem);
      line-height: 1.14;
      max-width: 920px;
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .hero h1 .accent {
      background: var(--gradient-accent);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .hero p {
      max-width: 760px;
      color: var(--thistle);
      font-size: clamp(1rem, 2vw, 1.2rem);
      margin-top: 18px;
      line-height: 1.7;
    }
    .content {
      padding: 8px 24px 64px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
      margin-top: 24px;
    }
    .card {
      display: block;
      text-decoration: none;
      color: inherit;
      background: white;
      border-radius: 24px;
      padding: 24px;
      border: 1px solid rgba(48, 30, 69, 0.08);
      box-shadow: 0 18px 40px rgba(24, 34, 45, 0.08);
      transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 24px 60px rgba(24, 34, 45, 0.14);
      border-color: rgba(182, 123, 37, 0.35);
    }
    .eyebrow {
      color: var(--copper);
      font-weight: 700;
      font-size: 13px;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    h2 {
      margin: 10px 0 10px;
      color: var(--russian-violet);
      font-size: 28px;
      line-height: 1.2;
    }
    .card p {
      margin: 0 0 18px;
      color: #4b5563;
      line-height: 1.7;
    }
    .path {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      color: var(--rose-red);
      font-size: 14px;
    }
    .footer {
      margin-top: 36px;
      padding: 24px;
      border-radius: 24px;
      background: var(--gradient-dark);
      color: var(--thistle);
      line-height: 1.8;
    }
    .footer strong { color: white; }
    code {
      background: rgba(255,255,255,.08);
      padding: 2px 8px;
      border-radius: 999px;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    }
    @media (max-width: 640px) {
      .hero {
        padding: 48px 18px 88px;
      }
      h1 {
        font-size: clamp(2.15rem, 11vw, 3.25rem);
        line-height: 1.2;
        letter-spacing: -0.01em;
      }
      .hero p {
        font-size: 1rem;
        line-height: 1.75;
      }
      .grid {
        grid-template-columns: 1fr;
      }
      .card {
        padding: 22px;
      }
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="hero-inner">
      <div class="badge">☕ Data-Espresso · Slidev Hub</div>
      <h1>ความรู้ <span class="accent">Data/AI</span> เข้มข้น ย่อยง่าย ใช้งานได้ทันที</h1>
      <p>รวม presentation ของ Data-Espresso ในที่เดียว ใช้ theme หลักเดียวกันทั้งหมด เพื่อให้ deck ทุกชุดดูเป็นแบรนด์เดียวกัน อ่านง่าย และพร้อมใช้งานทั้งในงานขาย งานสอน และ consulting</p>
    </div>
  </section>
  <main class="content">
    <div class="grid">${cards}
    </div>
    <div class="footer">
      <strong>วิธีเพิ่ม presentation ใหม่</strong><br>
      เพิ่มไฟล์ <code>.md</code> ในโฟลเดอร์ <code>decks/</code> แล้วเพิ่มรายการใน <code>decks.json</code> จากนั้นรัน <code>npm run build</code> หรือ push ขึ้น Git เพื่อ deploy ใหม่บน Coolify
    </div>
  </main>
</body>
</html>`

await writeFile(join(distDir, 'index.html'), html)
await rm(tempDir, { recursive: true, force: true })
console.log(`Built ${decks.length} presentations and homepage.`)
