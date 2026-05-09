---
theme: ../theme/data-espresso-theme
title: Coding for Marketers
info: "Practical Workshop 90 นาที: ใช้ Agentic AI tools ให้ marketer สร้างของได้จริง"
layout: cover
background: '#101010'
---

<h1 class="de-hero-title">Coding for <br>Marketers</h1>

<div class="de-hero-subtitle">
Practical Workshop 90 นาที สำหรับนักการตลาด เจ้าของธุรกิจ และทีม growth ที่อยากใช้ Agentic AI tools ให้สร้างหน้าเว็บ เครื่องมือ และ workflow ได้จริง โดยไม่ต้องเริ่มจากการเป็น programmer แบบดั้งเดิม
</div>

<div class="de-hero-meta">
  <div class="de-chip">🎓 Practical Workshop</div>
  <div class="de-chip">⏱ 90 นาที</div>
  <div class="de-chip">🤖 Agentic AI</div>
</div>

---
layout: section
---

# Part 0

วางกรอบ workshop และตั้งความคาดหวัง

---

<div class="de-slide-header">
  <div class="de-slide-index">01 · Session map</div>
  <div class="de-kicker">Agenda</div>
</div>

<div class="de-table-card">
  <table>
    <thead>
      <tr><th>ช่วง</th><th>เวลา</th><th>เป้าหมาย</th></tr>
    </thead>
    <tbody>
      <tr><td>Kickoff + framing</td><td>10 นาที</td><td>ตั้ง mindset และภาพรวมของ session</td></tr>
      <tr><td>Core concepts</td><td>20 นาที</td><td>เข้าใจ advice vs execution และ stack ที่ต้องรู้</td></tr>
      <tr><td>Technical essentials</td><td>15 นาที</td><td>รู้คำพื้นฐานพอคุมงานกับ agent ได้</td></tr>
      <tr><td>Hands-on exercise</td><td>25 นาที</td><td>ลองออกแบบงานจริงด้วย prompt และ workflow</td></tr>
      <tr><td>Review + debrief</td><td>10 นาที</td><td>สรุปข้อผิดพลาดและสิ่งที่เรียนรู้</td></tr>
      <tr><td>Action plan + Q&A</td><td>10 นาที</td><td>แปลงเป็น next step หลัง workshop</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">02 · Learning outcomes</div>
  <div class="de-kicker">เป้าหมายการเรียนรู้</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>หลังจบ session นี้ คุณจะ...</h2>
    <ul>
      <li>อธิบายได้ว่า Agentic AI ต่างจาก chat AI ปกติอย่างไร</li>
      <li>เห็น use case ที่เอาไปใช้กับงาน marketing ได้จริง</li>
      <li>รู้ศัพท์เทคนิคพื้นฐานที่จำเป็น</li>
      <li>ออกแบบ prompt + workflow ให้ agent ลงมือทำงานได้</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>หลักคิดของ Session</h2>
    <p>นี่ไม่ใช่ class สอน coding แบบ traditional แต่เป็น class สอน “การคุม execution ผ่าน AI”</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">03 · Audience check</div>
  <div class="de-kicker">Icebreaker</div>
</div>

<div class="de-list-card">
  <h2>คำถามตั้งต้น 3 ข้อ</h2>
  <ul>
    <li>วันนี้คุณใช้ AI กับงานอะไรบ้าง</li>
    <li>งานไหนที่ยังต้องรอ dev หรือทีมเทคนิคอยู่เสมอ</li>
    <li>ถ้า AI ทำงาน 1 อย่างแทนทีมได้พรุ่งนี้ คุณอยากให้มันทำอะไร</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">04 · Demo readiness</div>
  <div class="de-kicker">Before you start</div>
</div>

<div class="de-soft-panel">
ก่อนเริ่ม demo เช็กว่า environment พร้อม, browser พร้อม, repo/example project พร้อม, และมี fallback plan ถ้า live demo พัง เช่น screenshot หรือ recorded walkthrough
</div>

---
layout: section
---

# Part 1

เปลี่ยน mindset จาก “ถาม AI” ไปเป็น “สั่งงานระบบ”

---

<div class="de-slide-header">
  <div class="de-slide-index">05 · Core shift</div>
  <div class="de-statement">ประเด็นใหญ่ไม่ใช่ marketer ต้องเขียนโค้ดเอง แต่ marketer ต้องสั่งงานระบบ execution ได้</div>
</div>

<div class="de-soft-panel">
AI ยุคก่อนช่วยคิด ช่วยร่าง ช่วยตอบ แต่ AI ยุค agent เริ่มช่วย “ลงมือทำ” ได้จริง ดังนั้น skill ใหม่ของ marketer คือการกำหนด outcome, context, constraint และ review output อย่างแม่นยำ
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">06 · Advice vs Execution</div>
  <div class="de-kicker">Mental model</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>Advice mode</h2>
    <ul>
      <li>ถามแล้วได้คำตอบ</li>
      <li>ถามแล้วได้ snippet</li>
      <li>คุณยังต้องเอาไปทำต่อเอง</li>
      <li>เหมาะกับ brainstorm หรือ research ย่อๆ</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>Execution mode</h2>
    <ul>
      <li>สั่งแล้ว agent ลงมือแก้ project จริง</li>
      <li>สร้างไฟล์ ติดตั้ง package รันคำสั่งได้</li>
      <li>ช่วย deploy และ debug ได้</li>
      <li>เหมาะกับงานที่ต้องมี output ใช้งานได้จริง</li>
    </ul>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">07 · Why this matters</div>
  <div class="de-kicker">Business impact</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric">
    <div class="label">Impact 1</div>
    <div class="value">Speed</div>
    <div>ไอเดียจาก marketing ไปถึงของจริงได้เร็วขึ้น</div>
  </div>
  <div class="de-metric">
    <div class="label">Impact 2</div>
    <div class="value">Experimentation</div>
    <div>ลองหลาย variant ได้โดยใช้แรงคนเดิม</div>
  </div>
  <div class="de-metric">
    <div class="label">Impact 3</div>
    <div class="value">Leverage</div>
    <div>ทีมเล็กทำงานได้เหมือนทีมใหญ่ขึ้น</div>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">08 · The new marketer role</div>
  <div class="de-kicker">Role shift</div>
</div>

<div class="de-list-card">
  <ul>
    <li>จาก content requester → execution orchestrator</li>
    <li>จากคนรอ output → คนกำหนดระบบการทำงาน</li>
    <li>จากคนเน้นคำตอบ → คนเน้น workflow และ outcome</li>
    <li>จากคนใช้ tool → คนออกแบบระบบใช้ tool หลายตัวร่วมกัน</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">09 · Reflection prompt</div>
  <div class="de-kicker">Discuss</div>
</div>

<div class="de-panel-dark">
  <h2>ถามห้อง</h2>
  <p>งานในทีมคุณวันนี้ มีงานอะไรที่จริงๆ แล้วไม่ควรต้องรอทีมเทคนิคทุกครั้ง แต่เรายังติดอยู่กับวิธีทำงานแบบเดิม?</p>
</div>

---
layout: section
---

# Part 2

marketer ใช้ agent สร้างอะไรได้บ้าง

---

<div class="de-slide-header">
  <div class="de-slide-index">10 · Opportunity map</div>
  <div class="de-kicker">Use cases</div>
</div>

<div class="de-soft-panel">
Use case ที่เหมาะที่สุดคืองานที่ต้องการความเร็ว, มี pattern ซ้ำๆ, และมี definition of done ชัด เช่น หน้าเว็บ, mini tools, integrations, internal dashboard, campaign utility
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">11 · Pages & sites</div>
  <div class="de-kicker">Use Case 1</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric">
    <div class="label">Example</div>
    <div class="value">Landing Page</div>
    <div>ทำหน้า campaign พร้อม CTA, testimonial, FAQ ได้เร็วมาก</div>
  </div>
  <div class="de-metric">
    <div class="label">Example</div>
    <div class="value">Pricing Page</div>
    <div>เพิ่ม pricing toggle, tier compare, offer block</div>
  </div>
  <div class="de-metric">
    <div class="label">Example</div>
    <div class="value">Comparison SEO</div>
    <div>ทำ competitor page หรือ feature comparison page ได้ไว</div>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">12 · Mini tools</div>
  <div class="de-kicker">Use Case 2</div>
</div>

<div class="de-list-card">
  <ul>
    <li>ROI calculator</li>
    <li>pricing estimator</li>
    <li>campaign planner</li>
    <li>UTM generator</li>
    <li>lead qualification helper</li>
    <li>brief generator สำหรับทีม content</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">13 · Integrations</div>
  <div class="de-kicker">Use Case 3</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>service ที่เกี่ยวข้อง</h2>
    <ul>
      <li>Vercel (deploy)</li>
      <li>Stripe (payments)</li>
      <li>Resend (email)</li>
      <li>Supabase (database / auth)</li>
      <li>PostHog (analytics)</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>Key takeaway</h2>
    <p>สิ่งสำคัญไม่ใช่แค่ต่อ service ได้ แต่คือต่อแล้ว workflow marketing ใช้งานต่อได้จริง เช่น form → email → CRM → report</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">14 · Internal tools</div>
  <div class="de-kicker">Use Case 4</div>
</div>

<div class="de-list-card">
  <ul>
    <li>dashboard เล็กๆ สำหรับทีม</li>
    <li>content operations helper</li>
    <li>internal lead routing page</li>
    <li>sales enablement microsite</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">15 · Selection criteria</div>
  <div class="de-kicker">Pick the right first project</div>
</div>

<div class="de-table-card">
  <table>
    <thead>
      <tr><th>คำถาม</th><th>ถ้าตอบว่าใช่ แปลว่าเหมาะ</th></tr>
    </thead>
    <tbody>
      <tr><td>งานนี้มีผลต่อ revenue / speed ไหม</td><td>ควรเริ่มก่อน</td></tr>
      <tr><td>definition of done ชัดไหม</td><td>agent จะทำได้แม่นขึ้น</td></tr>
      <tr><td>risk ถ้าพังคุมได้ไหม</td><td>เหมาะกับการทดลอง</td></tr>
      <tr><td>ทีม review output ได้ไหม</td><td>พร้อมให้ AI ช่วยจริง</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">16 · Mini workshop</div>
  <div class="de-kicker">Mini workshop</div>
</div>

<div class="de-panel-dark">
  <h2>Mini exercise 3 นาที</h2>
  <p>เขียนรายการ 3 งานในทีมที่ถ้าทำเร็วกว่านี้ 3 เท่า จะส่งผลต่อยอดขายหรือประสิทธิภาพของทีมทันที</p>
</div>

---
layout: section
---

# Part 3

Software stack ที่ marketer ควรรู้แบบไม่ต้องเป็น dev

---

<div class="de-slide-header">
  <div class="de-slide-index">17 · Layered model</div>
  <div class="de-kicker">Stack overview</div>
</div>

<div class="de-soft-panel">
ให้คิดว่า software stack เป็นหลายชั้น คุณไม่ต้องเป็น expert ทุกชั้น แต่ต้องรู้ว่าถามหรือสั่งงาน agent ตรงไหน และคาดหวัง output แบบไหนจากแต่ละ layer
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">18 · Layer 1</div>
  <div class="de-kicker">AI providers</div>
</div>

<div class="de-list-card">
  <ul>
    <li>คือ “สมอง” ของระบบ เช่น OpenAI, Anthropic</li>
    <li>ต่างกันเรื่องคุณภาพ ความเร็ว ราคา และ style</li>
    <li>marketer ควรรู้พอเลือกให้เหมาะกับ use case</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">19 · Layer 2</div>
  <div class="de-kicker">Agentic tools</div>
</div>

<div class="de-panel-dark">
  <h2>Layer สำคัญที่สุดสำหรับ marketer</h2>
  <p>Claude Code, Cursor, Codex คือชั้นที่รับ intent ของคุณ แล้วไปจัดการ codebase, files, packages, commands และ execution flow ให้</p>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">20 · Layer 3</div>
  <div class="de-kicker">Frameworks</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>ตัวอย่าง framework</h2>
    <ul>
      <li>Next.js</li>
      <li>Rails</li>
      <li>Django</li>
    </ul>
  </div>
  <div class="de-soft-panel">
สำหรับงาน marketing modern web, Next.js มักเป็นจุดเริ่มต้นที่ดีเพราะ ecosystem ดีและ AI tool support แข็งแรง</div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">21 · Layer 4</div>
  <div class="de-kicker">Git / GitHub</div>
</div>

<div class="de-list-card">
  <ul>
    <li>เก็บประวัติการเปลี่ยนแปลง</li>
    <li>ย้อนกลับได้</li>
    <li>ทำงานผ่าน branch ได้</li>
    <li>เป็น safety net เวลาให้ agent แก้หลายไฟล์</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">22 · Layer 5</div>
  <div class="de-kicker">Hosting</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric">
    <div class="label">Hosting</div>
    <div class="value">Vercel</div>
    <div>เหมาะกับ Next.js, deploy ง่าย, preview เร็ว</div>
  </div>
  <div class="de-metric">
    <div class="label">Hosting</div>
    <div class="value">Heroku</div>
    <div>คุ้นเคยสำหรับหลายทีม แต่ use case ต่างจาก Vercel</div>
  </div>
  <div class="de-metric">
    <div class="label">Mental model</div>
    <div class="value">Home of the app</div>
    <div>คือที่ที่ของจริงไปอยู่และ user ใช้งานได้</div>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">23 · Recommended starter stack</div>
  <div class="de-kicker">Start here</div>
</div>

<div class="de-panel-dark">
  <h2>สูตรเริ่มต้นที่ practical</h2>
  <p><strong>Next.js + TypeScript + Vercel</strong> เพราะหาง่าย เรียนรู้ง่ายเมื่อใช้กับ AI และมีตัวอย่างโค้ด/โปรเจกต์ให้ศึกษาเยอะ</p>
</div>

---
layout: section
---

# Part 4

ศัพท์เทคนิคพื้นฐานที่ non-coder ควรรู้

---

<div class="de-slide-header">
  <div class="de-slide-index">24 · Terminal basics</div>
  <div class="de-kicker">Command line</div>
</div>

<div class="de-table-card">
  <table>
    <thead>
      <tr><th>คำสั่ง</th><th>ความหมายแบบง่าย</th></tr>
    </thead>
    <tbody>
      <tr><td>`cd folder-name`</td><td>เข้าไปในโฟลเดอร์</td></tr>
      <tr><td>`ls`</td><td>ดูรายการไฟล์</td></tr>
      <tr><td>`pwd`</td><td>ดูว่าตอนนี้เราอยู่ที่ไหน</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">25 · Why terminal matters</div>
  <div class="de-kicker">Confidence</div>
</div>

<div class="de-soft-panel">
ถึง agent จะช่วยรันคำสั่งให้ แต่ถ้าคุณอ่าน terminal output ได้บ้าง คุณจะเข้าใจบริบทของโปรเจกต์และแก้ปัญหาได้ไวขึ้นมาก
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">26 · Localhost</div>
  <div class="de-kicker">Concept</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>localhost คืออะไร</h2>
    <p>คอมของคุณกำลังทำตัวเหมือน server ชั่วคราว เพื่อให้คุณ preview app ก่อนปล่อยจริง</p>
  </div>
  <div class="de-panel-dark">
    <h2>สิ่งที่ต้องรู้</h2>
    <p>ถ้าเห็น `localhost:3000` แปลว่า app รันอยู่และเปิดใน browser ได้</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">27 · Ports</div>
  <div class="de-kicker">Analogy</div>
</div>

<div class="de-soft-panel">
port เปรียบเหมือนเลขห้องของ app ถ้าเครื่องเดียวมีหลาย app ก็ใช้คนละ port เพื่อไม่ให้ชนกัน เช่น `3000`, `3001`, `8080`
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">28 · Common issue</div>
  <div class="de-kicker">Port conflict</div>
</div>

<div class="de-list-card">
  <ul>
    <li>ถ้า port ถูกใช้ไปแล้ว app จะรันไม่ขึ้น</li>
    <li>แก้ด้วยการเปลี่ยน port เช่น `npm run dev -- --port 3001`</li>
    <li>อย่าตกใจ เพราะเป็น error ปกติมาก</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">29 · Environment variables</div>
  <div class="de-kicker">Secrets</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>.env.local เก็บอะไร</h2>
    <ul>
      <li>API keys</li>
      <li>passwords</li>
      <li>tokens</li>
      <li>service credentials</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>กฎเหล็ก</h2>
    <p>secret ต้องอยู่ local เท่านั้น และไม่ควรถูก commit ขึ้น GitHub</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">30 · Context window</div>
  <div class="de-kicker">AI memory</div>
</div>

<div class="de-list-card">
  <ul>
    <li>model มี memory จำกัดในแต่ละรอบ</li>
    <li>paste code เยอะเกินไปทำให้คุณภาพลดลง</li>
    <li>แตกงานเป็น task ย่อยจะดีกว่า</li>
    <li>อ้างชื่อไฟล์แทนการ paste ทั้งหมดช่วยประหยัด context</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">31 · Recap checkpoint</div>
  <div class="de-kicker">Recap</div>
</div>

<div class="de-panel-dark">
  <h2>Recap 2 นาที</h2>
  <p>จับคู่กันแล้วอธิบายคำว่า localhost, port, .env.local และ context window ด้วยภาษาตัวเองภายใน 2 นาที</p>
</div>

---
layout: section
---

# Part 5

workflow การทำงานกับ agent ให้ได้งานจริง

---

<div class="de-slide-header">
  <div class="de-slide-index">32 · Iteration loop</div>
  <div class="de-kicker">Core workflow</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric">
    <div class="label">1</div>
    <div class="value">Describe</div>
    <div>อธิบาย outcome ที่ต้องการ</div>
  </div>
  <div class="de-metric">
    <div class="label">2</div>
    <div class="value">Review</div>
    <div>ดู plan และ output อย่างมีวิจารณญาณ</div>
  </div>
  <div class="de-metric">
    <div class="label">3</div>
    <div class="value">Refine</div>
    <div>วนแก้จนพร้อมใช้จริง</div>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">33 · Describe well</div>
  <div class="de-kicker">Prompt anatomy</div>
</div>

<div class="de-table-card">
  <table>
    <thead>
      <tr><th>องค์ประกอบ</th><th>ตัวอย่าง</th></tr>
    </thead>
    <tbody>
      <tr><td>Goal</td><td>สร้าง landing page สำหรับ webinar ใหม่</td></tr>
      <tr><td>Audience</td><td>CMO และทีม growth</td></tr>
      <tr><td>Constraints</td><td>ใช้แบรนด์ Data-Espresso, Thai language, mobile-friendly</td></tr>
      <tr><td>Definition of done</td><td>มี CTA, form, social proof, deploy preview</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">34 · Review well</div>
  <div class="de-kicker">Quality control</div>
</div>

<div class="de-list-card">
  <ul>
    <li>ตรง requirement ไหม</li>
    <li>มีอะไรพัง obvious ไหม</li>
    <li>copy / UX / CTA ดีพอไหม</li>
    <li>ถ้าให้ user ใช้จริง จะงงตรงไหน</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">35 · Refine well</div>
  <div class="de-kicker">Iteration</div>
</div>

<div class="de-soft-panel">
อย่าคาดหวังให้รอบแรกสมบูรณ์ ให้คิดเหมือนทำงานกับทีมจริง: draft → feedback → fix → polish → QA
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">36 · Agent modes</div>
  <div class="de-kicker">Operating modes</div>
</div>

<div class="de-table-card">
  <table>
    <thead>
      <tr><th>Mode</th><th>เหมาะเมื่อไร</th></tr>
    </thead>
    <tbody>
      <tr><td>Default</td><td>ตอนยังเรียนรู้และอยาก review ทุกการเปลี่ยนแปลง</td></tr>
      <tr><td>Auto-Accept</td><td>งานเล็กและ flow คุ้นแล้ว</td></tr>
      <tr><td>Plan Mode</td><td>งานซับซ้อน ต้องวาง strategy ก่อนลงมือ</td></tr>
      <tr><td>YOLO</td><td>ให้ autonomy สูง ใช้เมื่อมั่นใจและควบคุมความเสี่ยงได้</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">37 · Rule of thumb</div>
  <div class="de-kicker">Practical advice</div>
</div>

<div class="de-list-card">
  <ul>
    <li>มือใหม่เริ่มจาก Default</li>
    <li>งานยากใช้ Plan Mode ก่อน</li>
    <li>งานที่มี secret หรือ production risk ต้อง review เสมอ</li>
    <li>ความเร็วไม่สำคัญเท่าความถูกต้องในช่วงแรก</li>
  </ul>
</div>

---
layout: section
---

# Part 6

Git, debugging, testing, skills, และ workshop practice

---

<div class="de-slide-header">
  <div class="de-slide-index">38 · Git as safety net</div>
  <div class="de-kicker">Version control</div>
</div>

<div class="de-list-card">
  <ul>
    <li>ใช้ branch แยกก่อนทำของใหญ่</li>
    <li>review ก่อน merge</li>
    <li>ถ้าพังก็ย้อนกลับได้</li>
    <li>ช่วยให้กล้าลองมากขึ้นโดยไม่พังทั้งระบบ</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">39 · Debugging</div>
  <div class="de-kicker">When things break</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>วิธีที่ง่ายที่สุด</h2>
    <ul>
      <li>copy error log เต็มๆ</li>
      <li>ส่งให้ agent วิเคราะห์</li>
      <li>ถามว่า “เกิดอะไรขึ้น” ก่อนถาม “แก้ยังไง”</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>ทำไมเวิร์ก</h2>
    <p>เพราะ error log มีบริบทมากกว่าการเล่าแบบย่อ และช่วยให้เจอ root cause ได้แม่นขึ้น</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">40 · Testing</div>
  <div class="de-kicker">Prevent breakage</div>
</div>

<div class="de-list-card">
  <ul>
    <li>ถ้าเป็น feature สำคัญ ให้เขียน test ก่อนหรืออย่างน้อยกำหนด acceptance criteria ชัด</li>
    <li>ให้ agent run tests ก่อน deploy</li>
    <li>เช็ก UI จริงเสมอ อย่าพึ่งข้อความอย่างเดียว</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">41 · Skills & MCPs</div>
  <div class="de-kicker">Extend capabilities</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>Skills</h2>
    <p>เหมือนชุดความรู้เฉพาะทาง เช่น Vercel, UI best practices, brand guideline</p>
  </div>
  <div class="de-panel-dark">
    <h2>MCPs</h2>
    <p>ให้ agent เชื่อม external tools/services ได้ดีขึ้น และทำงานข้ามระบบได้คล่องขึ้น</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">42 · Hands-on exercise</div>
  <div class="de-kicker">Workshop task</div>
</div>

<div class="de-list-card">
  <h2>โจทย์กลุ่ม</h2>
  <ul>
    <li>เลือก use case 1 อย่างที่ทีมคุณอยากทำ</li>
    <li>เขียน prompt ที่มี goal, audience, constraints, definition of done</li>
    <li>ให้เพื่อนอีกกลุ่มช่วย review prompt ก่อนใช้จริง</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">43 · Debrief</div>
  <div class="de-kicker">Discussion</div>
</div>

<div class="de-panel-dark">
  <h2>ถามห้องหลังทำ exercise</h2>
  <ul>
    <li>prompt ไหนชัดที่สุด เพราะอะไร</li>
    <li>prompt ไหนยังคลุมเครือ</li>
    <li>definition of done แบบไหนที่ช่วยคุม output ได้ดีที่สุด</li>
  </ul>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">44 · Post-workshop action plan</div>
  <div class="de-kicker">Next 7 days</div>
</div>

<div class="de-table-card">
  <table>
    <thead>
      <tr><th>เวลา</th><th>สิ่งที่ควรทำ</th></tr>
    </thead>
    <tbody>
      <tr><td>ภายใน 24 ชั่วโมง</td><td>เลือก 1 use case ที่อยากลองจริง</td></tr>
      <tr><td>ภายใน 3 วัน</td><td>เขียน prompt + requirement ที่ชัด</td></tr>
      <tr><td>ภายใน 7 วัน</td><td>ให้ agent สร้างของจริงเวอร์ชันแรกและ review ให้ครบ</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">45 · Final takeaway</div>
  <div class="de-kicker">#สรุป</div>
</div>

<div class="de-list-card">
  <ul>
    <li>marketer ยุคนี้ต้องเก่งการ <strong>delegate งานให้ AI</strong> มากกว่าการจำ syntax</li>
    <li>Agentic tools ลด bottleneck และเพิ่มความเร็วของทีมอย่างมีนัยสำคัญ</li>
    <li>สิ่งที่สำคัญที่สุดคือ judgment, workflow thinking, และการ review output</li>
    <li>เริ่มจากงานเล็กที่วัดผลได้ แล้วค่อยขยายไปสู่ workflow ที่ใหญ่ขึ้น</li>
  </ul>
</div>

<div class="de-soft-panel mt-6">
💡 ถ้ามองในมุม Data-Espresso เรื่องนี้คือการย้าย marketer จาก “consumer ของ tool” ไปเป็น “operator ของ execution system”
</div>

---
layout: end
---

# ขอบคุณครับ

สรุปให้สั้นที่สุด: marketer ที่ใช้ Agentic AI ได้ดี จะไม่ใช่คนที่เขียนโค้ดเก่งที่สุด แต่เป็นคนที่สั่งงาน ชี้เป้า และตรวจคุณภาพงานได้ดีที่สุด
