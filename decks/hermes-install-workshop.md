---
theme: ../theme/data-espresso-theme
title: "ติดตั้ง Hermes Agent ให้พร้อมใช้งานจริง"
info: "Workshop deck สอนติดตั้ง Hermes Agent: CLI, provider, tools, memory, skills, gateway, verification"
layout: cover
background: '#101010'
---

<img src="../assets/hermes-install-cover.svg" class="de-visual-full" alt="Hermes Agent install workshop cover" />

---
layout: section
---

# เป้าหมายของ session

จากเครื่องเปล่า → Hermes ที่คุยได้, ใช้ tools ได้, และต่อ messaging platform ได้

---

<div class="de-slide-header">
  <div class="de-slide-index">01 · What learners will build</div>
  <div class="de-kicker">Outcome first</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>หลังจบควรทำได้</h2>
    <ul>
      <li>ติดตั้ง Hermes บน macOS, Linux, หรือ WSL2</li>
      <li>ตั้งค่า provider/model ผ่าน <code>hermes setup</code></li>
      <li>เปิดใช้ tools ที่จำเป็นกับงานจริง</li>
      <li>ตรวจสุขภาพด้วย <code>hermes doctor</code></li>
      <li>ต่อ gateway ไป Telegram/Discord/Slack ได้</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>Instructor note</h2>
    <p>อย่าสอนแบบ “ลง command แล้วจบ” ให้สอนเป็นระบบ production habit: install, configure, verify, then operate.</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">02 · Mental model</div>
  <div class="de-kicker">Architecture</div>
</div>

<img src="../assets/hermes-local-architecture.svg" class="de-visual-card" alt="Hermes local architecture" />

---

<div class="de-slide-header">
  <div class="de-slide-index">03 · Prerequisites</div>
  <div class="de-kicker">Before install</div>
</div>

<div class="de-table-card">
  <table>
    <thead><tr><th>สิ่งที่ต้องมี</th><th>ทำไมต้องมี</th><th>เช็กเร็ว</th></tr></thead>
    <tbody>
      <tr><td>macOS, Linux, WSL2</td><td>Hermes รันใน terminal environment</td><td><code>uname -a</code></td></tr>
      <tr><td>Git + shell</td><td>installer ต้อง clone/update และแก้ shell rc</td><td><code>git --version</code></td></tr>
      <tr><td>LLM account/key</td><td>ต้องมี provider ให้ Hermes คิดและเรียก tools</td><td>OpenRouter, Codex, Nous, Anthropic</td></tr>
      <tr><td>Messaging bot token</td><td>ใช้เฉพาะตอนเปิด gateway</td><td>Telegram BotFather หรือ Discord Portal</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">04 · Installation flow</div>
  <div class="de-kicker">Follow the path</div>
</div>

<img src="../assets/hermes-install-flow.svg" class="de-visual-card" alt="Hermes install flow" />

---

<div class="de-slide-header">
  <div class="de-slide-index">05 · One-line installer</div>
  <div class="de-kicker">Linux / macOS / WSL2</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>คำสั่งหลัก</h2>

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

  </div>
  <div class="de-panel-dark">
    <h2>จุดที่ต้องอธิบาย</h2>
    <ul>
      <li>โหลด installer จาก GitHub official repo</li>
      <li>ติดตั้ง Hermes CLI และ dependency ที่จำเป็น</li>
      <li>หลัง install ให้ reload shell ก่อนเรียก <code>hermes</code></li>
    </ul>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">06 · Reload shell</div>
  <div class="de-kicker">PATH check</div>
</div>

<div class="de-two-up">
  <div class="de-soft-panel">

```bash
source ~/.zshrc
# หรือ
source ~/.bashrc

hermes --version
```

  </div>
  <div class="de-list-card">
    <h2>ถ้า command not found</h2>
    <ul>
      <li>ปิด terminal แล้วเปิดใหม่</li>
      <li>เช็กว่า installer เพิ่ม PATH ใน shell rc แล้วหรือยัง</li>
      <li>รัน <code>which hermes</code> เพื่อดูตำแหน่ง binary</li>
    </ul>
  </div>
</div>

---
layout: section
---

# ตั้งค่า Hermes ครั้งแรก

Provider, model, tools, และ config ที่ต้องรู้ก่อนใช้งานจริง

---

<div class="de-slide-header">
  <div class="de-slide-index">07 · Setup wizard</div>
  <div class="de-kicker">First run</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>เริ่มจาก wizard</h2>

```bash
hermes setup
hermes model
hermes config
```

  </div>
  <div class="de-panel-dark">
    <h2>สิ่งที่ wizard ช่วยถาม</h2>
    <ul>
      <li>จะใช้ provider ไหน</li>
      <li>model default คืออะไร</li>
      <li>เปิด terminal/tool execution แบบไหน</li>
      <li>gateway หรือ voice ต้องเปิดไหม</li>
    </ul>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">08 · Provider choices</div>
  <div class="de-kicker">Pick based on workflow</div>
</div>

<div class="de-table-card">
  <table>
    <thead><tr><th>Provider</th><th>เหมาะกับ</th><th>หมายเหตุ</th></tr></thead>
    <tbody>
      <tr><td>OpenAI Codex</td><td>coding, repo work, CLI agent workflow</td><td>ใช้ OAuth login ได้</td></tr>
      <tr><td>OpenRouter</td><td>เลือก model ได้หลากหลาย</td><td>ต้องมี API key</td></tr>
      <tr><td>Nous Portal</td><td>ใช้งานกับ ecosystem ของ Nous</td><td>เหมาะกับทดลอง Hermes native</td></tr>
      <tr><td>Custom endpoint</td><td>องค์กรที่มี model gateway เอง</td><td>ต้องตั้ง base URL/key ให้ถูก</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">09 · Login and keys</div>
  <div class="de-kicker">Secrets stay local</div>
</div>

<div class="de-two-up">
  <div class="de-soft-panel">

```bash
hermes login --provider openai-codex
hermes auth list
hermes config env-path
```

  </div>
  <div class="de-list-card">
    <h2>สอน security habit</h2>
    <ul>
      <li>API keys อยู่ใน <code>~/.hermes/.env</code></li>
      <li>config อยู่ใน <code>~/.hermes/config.yaml</code></li>
      <li>อย่า paste secret ลง slide, repo, หรือ group chat</li>
    </ul>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">10 · Tools and toolsets</div>
  <div class="de-kicker">Capability switchboard</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric"><div class="label">Core</div><div class="value">terminal + file</div><div>ให้ agent อ่านไฟล์ แก้ไฟล์ รัน test และ build ได้</div></div>
  <div class="de-metric"><div class="label">Research</div><div class="value">web + browser</div><div>ค้นเว็บ เปิดหน้าเว็บ และเก็บ evidence ได้</div></div>
  <div class="de-metric"><div class="label">Ops</div><div class="value">cron + send</div><div>ตั้งงานอัตโนมัติและส่งกลับ platform ได้</div></div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">11 · Enable tools safely</div>
  <div class="de-kicker">Tool governance</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>คำสั่งที่ควรรู้</h2>

```bash
hermes tools list
hermes tools enable web
hermes tools enable terminal
hermes tools disable homeassistant
```

  </div>
  <div class="de-panel-dark">
    <h2>Rule of thumb</h2>
    <p>เปิด tools เท่าที่ workflow ต้องใช้จริง ยิ่ง agent อยู่ใน group chat ยิ่งต้องระวัง tools ที่มี side effect เช่น email, social, home control.</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">12 · Memory and skills</div>
  <div class="de-kicker">Learning loop</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>Memory จำเรื่องคนและ environment</h2>
    <ul>
      <li>ชื่อ, timezone, preference</li>
      <li>project conventions ที่ใช้ซ้ำ</li>
      <li>tool quirks ที่เจอแล้วไม่ควรลืม</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>Skills จำวิธีทำงาน</h2>
    <ul>
      <li>ขั้นตอน deploy</li>
      <li>workflow debug</li>
      <li>คำสั่งและ pitfalls เฉพาะงาน</li>
    </ul>
  </div>
</div>

---
layout: section
---

# เปิด Messaging Gateway

ทำให้ Hermes ตอบและทำงานจาก Telegram, Discord, Slack หรือ platform อื่นได้

---

<div class="de-slide-header">
  <div class="de-slide-index">13 · Gateway map</div>
  <div class="de-kicker">Messaging layer</div>
</div>

<img src="../assets/hermes-gateway-map.svg" class="de-visual-card" alt="Hermes gateway platforms" />

---

<div class="de-slide-header">
  <div class="de-slide-index">14 · Gateway setup</div>
  <div class="de-kicker">Interactive setup</div>
</div>

<div class="de-two-up">
  <div class="de-soft-panel">

```bash
hermes gateway setup
hermes gateway run
hermes gateway status
```

  </div>
  <div class="de-list-card">
    <h2>แนะนำให้เริ่มแบบนี้</h2>
    <ul>
      <li>run foreground ก่อน เพื่อเห็น log</li>
      <li>ทดสอบ mention/message จาก platform</li>
      <li>ค่อย install เป็น background service</li>
    </ul>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">15 · Telegram setup</div>
  <div class="de-kicker">Practical path</div>
</div>

<div class="de-table-card">
  <table>
    <thead><tr><th>Step</th><th>Action</th><th>Evidence</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>สร้าง bot ผ่าน BotFather</td><td>ได้ bot token</td></tr>
      <tr><td>2</td><td>ใส่ token ใน gateway setup</td><td>config/env ถูก update</td></tr>
      <tr><td>3</td><td>เพิ่ม bot เข้า chat หรือ group</td><td>bot เห็นข้อความ</td></tr>
      <tr><td>4</td><td>ลองถามแบบสั้น</td><td>Hermes ตอบกลับพร้อมใช้ tools</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">16 · Discord setup pitfall</div>
  <div class="de-kicker">Avoid blocked startup</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>ค่าที่ควรระวัง</h2>
    <ul>
      <li>ถ้าไม่ได้ resolve username ไม่ควรเปิด privileged Members intent</li>
      <li>ตั้ง <code>require_mention: true</code> ใน server/group ที่ bot เห็นทุก message</li>
      <li>ตรวจ log ถ้า bot online แต่ไม่ตอบ</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>Good default</h2>
    <p>เริ่มจากให้ Hermes ตอบเมื่อถูก mention ก่อน แล้วค่อย whitelist channel ที่ต้องการให้ free response.</p>
  </div>
</div>

---
layout: section
---

# Verification และ troubleshooting

อย่าจบด้วยความรู้สึกว่าติดตั้งแล้ว ให้จบด้วยหลักฐานว่าใช้งานได้จริง

---

<div class="de-slide-header">
  <div class="de-slide-index">17 · Proof-first checklist</div>
  <div class="de-kicker">Verify before celebrate</div>
</div>

<img src="../assets/hermes-proof-checklist.svg" class="de-visual-card" alt="Hermes proof-first checklist" />

---

<div class="de-slide-header">
  <div class="de-slide-index">18 · Smoke tests</div>
  <div class="de-kicker">Fast checks</div>
</div>

<div class="de-two-up">
  <div class="de-soft-panel">

```bash
hermes doctor
hermes status --all
hermes chat -q "ตอบว่า Hermes พร้อมใช้งาน"
hermes tools list
```

  </div>
  <div class="de-list-card">
    <h2>ตีความผลลัพธ์</h2>
    <ul>
      <li>doctor บอก dependency/config ที่ยังขาด</li>
      <li>status ช่วยดู gateway/service</li>
      <li>chat smoke test ยืนยัน provider ใช้งานได้</li>
    </ul>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">19 · Troubleshooting map</div>
  <div class="de-kicker">Common failures</div>
</div>

<div class="de-table-card">
  <table>
    <thead><tr><th>อาการ</th><th>สาเหตุที่พบบ่อย</th><th>ทางแก้เร็ว</th></tr></thead>
    <tbody>
      <tr><td><code>hermes</code> not found</td><td>PATH ยังไม่ reload</td><td><code>source ~/.zshrc</code> หรือเปิด terminal ใหม่</td></tr>
      <tr><td>model call fail</td><td>key/login ไม่พร้อม</td><td><code>hermes login</code>, เช็ก <code>.env</code></td></tr>
      <tr><td>tool ไม่ขึ้น</td><td>toolset ปิดอยู่หรือ missing env</td><td><code>hermes tools list</code></td></tr>
      <tr><td>gateway ไม่ตอบ</td><td>token/permission/mention rule</td><td>ดู <code>~/.hermes/logs/gateway.log</code></td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">20 · Operating checklist</div>
  <div class="de-kicker">After install</div>
</div>

<div class="de-metric-grid">
  <div class="de-metric"><div class="label">Weekly</div><div class="value">update</div><div>เช็ก <code>hermes update</code> เมื่อมี feature หรือ bugfix ที่ต้องใช้</div></div>
  <div class="de-metric"><div class="label">Every change</div><div class="value">backup</div><div>ก่อนแก้ config สำคัญ ให้เก็บ diff หรือ backup config</div></div>
  <div class="de-metric"><div class="label">Always</div><div class="value">logs</div><div>เวลาพัง ให้เริ่มจาก logs และ doctor ไม่เดาเอาเอง</div></div>
</div>

---
layout: section
---

# Workshop exercise

ให้ผู้เรียนติดตั้งและส่งหลักฐานกลับมา ไม่ใช่แค่ดู demo

---

<div class="de-slide-header">
  <div class="de-slide-index">21 · Hands-on script</div>
  <div class="de-kicker">30-minute lab</div>
</div>

<div class="de-table-card">
  <table>
    <thead><tr><th>เวลา</th><th>กิจกรรม</th><th>Output</th></tr></thead>
    <tbody>
      <tr><td>0-5 นาที</td><td>เช็ก OS, shell, git</td><td>พร้อมติดตั้ง</td></tr>
      <tr><td>5-12 นาที</td><td>รัน installer และ reload shell</td><td><code>hermes --version</code></td></tr>
      <tr><td>12-22 นาที</td><td>ตั้ง provider/model</td><td><code>hermes chat -q</code> ผ่าน</td></tr>
      <tr><td>22-30 นาที</td><td>เปิด toolset + doctor</td><td>screenshot หรือ paste proof</td></tr>
    </tbody>
  </table>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">22 · Proof submission</div>
  <div class="de-kicker">What learners send back</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>ขอหลักฐาน 4 อย่าง</h2>
    <ul>
      <li><code>hermes --version</code></li>
      <li><code>hermes doctor</code> จุดสำคัญผ่าน</li>
      <li><code>hermes chat -q "ping"</code> มีคำตอบ</li>
      <li>ถ้าเปิด gateway: screenshot จาก Telegram/Discord</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>Instructor tip</h2>
    <p>อย่าขอให้ทุกคนโชว์ API key หรือ config ทั้งไฟล์ ให้ส่งเฉพาะ command output ที่ไม่เปิดเผย secret.</p>
  </div>
</div>

---

<div class="de-slide-header">
  <div class="de-slide-index">23 · Deployment note</div>
  <div class="de-kicker">How this deck is published</div>
</div>

<div class="de-two-up">
  <div class="de-list-card">
    <h2>Slidev → static site → Coolify</h2>
    <ul>
      <li>deck อยู่ใน <code>decks/hermes-install-workshop.md</code></li>
      <li>build ด้วย <code>npm run build</code></li>
      <li>Coolify serve static output ด้วย nginx container</li>
      <li>push ไป GitHub แล้ว Coolify redeploy</li>
    </ul>
  </div>
  <div class="de-panel-dark">
    <h2>Why static</h2>
    <p>ปลอดภัยกว่า dev/editor mode เพราะไม่มี write endpoint เปิด public และเหมาะกับการแชร์ slide ให้ทีม/ลูกค้า.</p>
  </div>
</div>

---
layout: end
---

# Key takeaway

ติดตั้ง Hermes ให้สำเร็จไม่ใช่แค่มี command <code>hermes</code> แต่ต้องมี proof ว่า agent คิดได้, ใช้ tools ได้, และอยู่ใน channel ที่ทีมใช้งานจริงได้อย่างปลอดภัย

<div class="de-hero-meta">
  <div class="de-chip">Install</div>
  <div class="de-chip">Configure</div>
  <div class="de-chip">Verify</div>
  <div class="de-chip">Operate</div>
</div>

<style>
.de-visual-full {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.de-visual-card {
  width: 100%;
  height: 78%;
  object-fit: contain;
  border-radius: 28px;
  box-shadow: 0 24px 70px rgba(24, 34, 45, 0.15);
}
.slidev-layout:has(.de-visual-full) {
  padding: 0;
}
.slidev-layout pre {
  font-size: 0.82rem;
  line-height: 1.5;
}
</style>
