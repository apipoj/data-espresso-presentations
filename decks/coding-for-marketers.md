---
theme: ../theme/data-espresso-theme
title: Coding for Marketers
info: "สรุปแนวคิดจาก Coding for Marketers: ใช้ Agentic AI tools ให้ marketer สร้างของได้จริง"
layout: cover
background: '#101010'
---

<h1 class="de-hero-title">Coding for <br>Marketers</h1>

<div class="de-hero-subtitle">
สรุปแนวคิดว่า marketer ยุคใหม่ไม่จำเป็นต้องเขียนโค้ดเก่งเองทุกบรรทัด แต่ต้องรู้วิธีสั่ง คุม และตรวจงานจาก Agentic AI tools ให้สร้างของได้จริง
</div>

<div class="de-hero-meta">
  <div class="de-chip">🤖 Agentic AI</div>
  <div class="de-chip">📈 Marketing Execution</div>
  <div class="de-chip">☕ Data-Espresso</div>
</div>

---
layout: section
---

# ประเด็นใหญ่ของเรื่องนี้ไม่ใช่ “นักการตลาดต้องเขียนโค้ดเอง”

แต่คือการเปลี่ยนบทบาทจากคนที่รอทีม dev ไปเป็นคนที่ **สั่งงานระบบ AI ให้ลงมือทำได้จริง**

---

<div class="de-slide-header">
  <div class="de-slide-index">01 · Core shift</div>
  <div class="de-kicker">Mindset</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>จาก advice → execution</h2>
    <ul>
      <li><strong>ChatGPT แบบเดิม</strong> ให้คำแนะนำหรือโค้ด snippet</li>
      <li><strong>Agentic tools</strong> ลงมือสร้างไฟล์ ติดตั้ง dependency แก้ code และ deploy ให้ได้</li>
      <li>marketer ไม่ได้ต้องรู้ทุก syntax แต่ต้องรู้ว่าอยากได้ outcome อะไร</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>💡 Insight</h2>
    <p>ประเด็นสำคัญคือ “หยุดคิดว่าคุณสร้างอะไรได้เอง” แล้วเริ่มคิดว่า “คุณ delegate อะไรให้ agent ทำแทนได้บ้าง”</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">02 · What marketers can build</div>
  <div class="de-statement">ถ้าใช้ agent ถูก นักการตลาดสร้างของได้เยอะกว่าที่คิด</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric">
    <div class="label">Use Case 1</div>
    <div class="value">Landing Pages</div>
    <div>ทำหน้า campaign, pricing page, A/B variants, competitor comparison page ได้เร็วขึ้นมาก</div>
  </div>
  <div class="de-metric">
    <div class="label">Use Case 2</div>
    <div class="value">Mini Tools</div>
    <div>ทำ calculator, lead form workflow, internal tool หรือ simple app สำหรับทีม marketing</div>
  </div>
  <div class="de-metric">
    <div class="label">Use Case 3</div>
    <div class="value">Integrations</div>
    <div>เชื่อม Vercel, Stripe, Resend, Supabase หรือ PostHog โดยไม่ต้องรอ dev ทุกครั้ง</div>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">03 · Stack for marketers</div>
  <div class="de-kicker">Layers</div>
</div>

<div class="de-table-card">
  <table>
    <thead>
      <tr><th>Layer</th><th>Marketer ต้องเข้าใจอะไร</th></tr>
    </thead>
    <tbody>
      <tr><td>AI Providers</td><td>รู้ว่าใครเป็น “สมอง” ของระบบ เช่น OpenAI หรือ Anthropic</td></tr>
      <tr><td>Agentic Tools</td><td>ชั้นที่สำคัญที่สุดสำหรับ marketer เช่น Claude Code, Cursor, Codex</td></tr>
      <tr><td>Framework</td><td>ไม่ต้องเชี่ยวชาญหมด แต่ควรรู้ว่า Next.js เป็นตัวเลือกเริ่มต้นที่ AI support ดี</td></tr>
      <tr><td>Git / GitHub</td><td>ใช้เป็น safety net เวลาลองของใหม่หรือ rollback</td></tr>
      <tr><td>Hosting</td><td>เข้าใจว่า Vercel / Heroku คือที่ที่งานเราไปอยู่จริง</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">04 · Technical essentials</div>
  <div class="de-statement">ของเทคนิคที่ non-coder ควรรู้ไว้ ไม่ต้องลึก แต่ควรรู้พอคุมงานได้</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>ควรรู้เรื่องอะไรบ้าง</h2>
    <ul>
      <li><strong>Terminal basics</strong> เช่น `cd`, `ls`, `pwd`</li>
      <li><strong>Localhost + ports</strong> เช่น app รันที่ `:3000` หรือ `:3001`</li>
      <li><strong>.env.local</strong> เก็บ API keys ไว้ local อย่า push ขึ้น GitHub</li>
      <li><strong>Context window</strong> งานใหญ่ควรแตกเป็น task ย่อยเพื่อไม่ให้ model หลง</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>สิ่งที่ไม่ต้องเก่งก่อน</h2>
    <p>คุณไม่จำเป็นต้องจำ syntax เยอะ หรือเป็น full-stack developer ก่อน แค่ต้องรู้หลักพอจะ review งาน agent, จับ error, และสั่งแก้ได้ตรงจุด</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">05 · Recommended workflow</div>
  <div class="de-kicker">Iteration Loop</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric">
    <div class="label">Step 1</div>
    <div class="value">Describe</div>
    <div>บอก outcome ที่ต้องการให้ชัด ไม่ใช่สั่งทีละบรรทัด</div>
  </div>
  <div class="de-metric">
    <div class="label">Step 2</div>
    <div class="value">Review</div>
    <div>ดู plan และ output ของ agent ก่อน accept</div>
  </div>
  <div class="de-metric">
    <div class="label">Step 3</div>
    <div class="value">Refine</div>
    <div>วนแก้จนกลายเป็นของที่ใช้ได้จริง ไม่ใช่แค่เดโม</div>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">06 · Practical takeaway</div>
  <div class="de-kicker">#สรุป</div>
</div>

<div class="de-list-card">
  <ul>
    <li>marketer ยุคนี้ควรเรียนรู้การ <strong>delegate งานให้ AI</strong> ไม่ใช่แค่ถามคำถาม</li>
    <li>เครื่องมืออย่าง Claude Code ทำให้คน non-technical เข้าใกล้การสร้าง software ได้มากขึ้น</li>
    <li>สิ่งที่สำคัญกว่า syntax คือ <strong>judgment</strong>, <strong>workflow thinking</strong>, และ <strong>ability to review output</strong></li>
    <li>จุดเริ่มต้นที่ดีคือ: สร้าง landing page, mini tool, หรือ internal workflow ที่ทีมใช้จริง</li>
  </ul>
</div>

<div class="de-soft-panel mt-6">
💡 ถ้ามองในมุม Data-Espresso เรื่องนี้คือการย้าย marketer จาก “consumer ของ tool” ไปเป็น “operator ของ execution system”
</div>

---
layout: end
---

# ขอบคุณครับ

ถ้าต้องการ ผมสามารถแตก deck นี้ต่อเป็นเวอร์ชัน workshop, content summary หรือ executive briefing ได้ทันที
