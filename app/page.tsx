"use client"

import { useEffect } from "react"

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

.rt-root {
  --wood-1: #5a3a22;
  --wood-2: #3d2616;
  --wood-3: #2a1a0e;
  --screen-bg: #0a0e0a;
  --glow: #6cff9e;
  --knob: #1c1c1c;
  --amber: #ffb347;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 40px 16px;
  font-family: 'VT323', monospace;
  background:
    radial-gradient(ellipse 80% 60% at 50% 38%, rgba(60, 80, 70, 0.18), transparent 70%),
    radial-gradient(ellipse 120% 100% at 50% 120%, rgba(40, 30, 20, 0.5), transparent 60%),
    #05060a;
  color: #cfe;
  overflow-x: hidden;
}
.rt-root * { box-sizing: border-box; margin: 0; padding: 0; }

.rt-root .stage { position: relative; display: flex; flex-direction: column; align-items: center; }

.rt-root .tv {
  position: relative;
  width: min(840px, 96vw);
  padding: 26px 26px 22px;
  border-radius: 28px 28px 22px 22px;
  background:
    repeating-linear-gradient(115deg, rgba(0,0,0,0.06) 0 6px, rgba(255,255,255,0.02) 6px 14px),
    linear-gradient(160deg, var(--wood-1), var(--wood-2) 55%, var(--wood-3));
  box-shadow:
    inset 0 2px 6px rgba(255,200,140,0.25),
    inset 0 -8px 24px rgba(0,0,0,0.6),
    0 30px 60px rgba(0,0,0,0.7),
    0 0 0 4px #1a1009;
  display: grid;
  grid-template-columns: 1fr 132px;
  gap: 22px;
}
@media (max-width: 560px) {
  .rt-root .tv { grid-template-columns: 1fr; padding: 18px; gap: 16px; }
}

.rt-root .bezel {
  position: relative;
  border-radius: 26px;
  padding: 20px;
  background: linear-gradient(160deg, #2b2b2b, #0c0c0c);
  box-shadow: inset 0 4px 10px rgba(0,0,0,0.9), inset 0 -2px 6px rgba(255,255,255,0.05);
}

.rt-root .screen {
  position: relative;
  aspect-ratio: 4 / 3;
  width: 100%;
  border-radius: 14% / 18%;
  overflow: hidden;
  background: var(--screen-bg);
  box-shadow: inset 0 0 60px rgba(0,0,0,0.95), inset 0 0 18px rgba(120,255,170,0.06);
  filter: saturate(1.05);
  transition: transform 0.25s ease;
}

.rt-root .channel {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; padding: 8% 9%;
  opacity: 0; pointer-events: none; transform: scale(1.02);
  transition: opacity 0.18s ease;
}
.rt-root .channel.active { opacity: 1; pointer-events: auto; }

.rt-root .ch-title {
  font-family: 'Press Start 2P', monospace;
  font-size: clamp(13px, 3.4vw, 26px);
  line-height: 1.5; letter-spacing: 1px; margin-bottom: 14px;
  text-shadow: 0 0 8px currentColor;
}
.rt-root .ch-desc { font-size: clamp(15px, 3.6vw, 22px); line-height: 1.25; max-width: 90%; opacity: 0.9; }
.rt-root .ch-hint {
  margin-top: 16px; font-family: 'Press Start 2P', monospace;
  font-size: clamp(7px, 1.8vw, 10px); padding: 7px 12px;
  border: 2px solid currentColor; border-radius: 4px; opacity: 0.85;
  animation: hintPulse 1.6s steps(2) infinite;
}
@keyframes hintPulse { 0%,49% {opacity:0.85;} 50%,100% {opacity:0.35;} }

.rt-root .shot {
  width: 76%; aspect-ratio: 16/10; border-radius: 6px; margin-bottom: 16px;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.15), 0 8px 20px rgba(0,0,0,0.6);
}
.rt-root .avatar {
  width: 88px; height: 88px; border-radius: 50%; margin-bottom: 16px;
  background: repeating-conic-gradient(from 0deg, #444 0 25%, #555 0 50%);
  box-shadow: inset 0 0 0 4px rgba(255,255,255,0.2), 0 0 18px rgba(120,255,170,0.3);
}

.rt-root .ch0 { color: #f4f4f4; }

/* ---- 个人介绍频道 ---- */
.rt-root .profile-card {
  display: flex; flex-direction: column; align-items: center; text-align: center;
  gap: 10px; width: 100%; padding: 0 8px;
}
.rt-root .profile-avatar {
  width: 70px; height: 70px; border-radius: 50%;
  background: linear-gradient(135deg, #6cff9e, #3a8fd4);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Press Start 2P', monospace; font-size: 22px;
  color: #05060a; font-weight: bold;
  box-shadow: 0 0 24px rgba(108,255,158,0.35);
  flex-shrink: 0;
}
.rt-root .profile-name {
  font-family: 'Press Start 2P', monospace; font-size: clamp(18px, 4vw, 30px);
  color: var(--glow); text-shadow: 0 0 12px var(--glow);
  margin: 0; line-height: 1.3;
}
.rt-root .profile-title {
  font-size: clamp(13px, 2.8vw, 18px); opacity: 0.85;
  color: #cfe; margin: 0;
}
.rt-root .profile-bio {
  font-size: clamp(12px, 2.4vw, 16px); opacity: 0.65; line-height: 1.6;
  max-width: 420px; margin: 0; color: #b0c8d0;
}
.rt-root .profile-links {
  display: flex; gap: 16px; margin-top: 6px; flex-wrap: wrap; justify-content: center;
}
.rt-root .profile-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: 'Press Start 2P', monospace; font-size: clamp(7px, 1.6vw, 10px);
  color: var(--amber); text-decoration: none;
  border: 2px solid var(--amber); padding: 6px 12px; border-radius: 6px;
  transition: all 0.15s;
}
.rt-root .profile-link:hover {
  background: var(--amber); color: #05060a;
}
.rt-root .profile-icon {
  width: 16px; height: 16px; flex-shrink: 0;
}
.rt-root .ch1 { color: #e8e8e8; filter: grayscale(1) contrast(1.1); }
.rt-root .ch2 { color: #ffd9a0; }
.rt-root .ch3 { color: #9ed8ff; }
.rt-root .ch4 { color: #c8ff9e; }

.rt-root .shot0 { background: linear-gradient(135deg,#555,#888); }
.rt-root .shot1 { background: linear-gradient(135deg,#222,#bbb); }
.rt-root .shot2 { background: linear-gradient(135deg,#7a3b1d,#ffb347); }
.rt-root .shot3 { background: linear-gradient(135deg,#143a5e,#5bb8ff); }
.rt-root .shot4 { background: linear-gradient(135deg,#1d4a1d,#7bff7b); }

.rt-root .testcard {
  position: absolute; inset: 0; z-index: -1; opacity: 0.28;
  background: linear-gradient(90deg,
    #c0c0c0 0 14.28%, #c0c000 0 28.57%, #00c0c0 0 42.85%,
    #00c000 0 57.14%, #c000c0 0 71.42%, #c00000 0 85.71%, #0000c0 0 100%);
}

.rt-root .scanlines {
  position: absolute; inset: 0; z-index: 30; pointer-events: none;
  background: repeating-linear-gradient(to bottom,
    rgba(0,0,0,0) 0, rgba(0,0,0,0) 2px, rgba(0,0,0,0.25) 3px, rgba(0,0,0,0.25) 3px);
  mix-blend-mode: multiply;
}
.rt-root .glass {
  position: absolute; inset: 0; z-index: 31; pointer-events: none;
  background:
    radial-gradient(ellipse 70% 55% at 30% 20%, rgba(255,255,255,0.08), transparent 50%),
    radial-gradient(ellipse 120% 120% at 50% 50%, transparent 55%, rgba(0,0,0,0.6) 100%);
}
.rt-root .flicker {
  position: absolute; inset:0; z-index: 32; pointer-events:none;
  background: rgba(180,255,200,0.04); animation: flick 0.12s steps(2) infinite;
}
@keyframes flick { 0%{opacity:0.5;} 50%{opacity:0.9;} 100%{opacity:0.4;} }

.rt-root #rt-noise { position: absolute; inset:0; z-index: 20; pointer-events:none; width:100%; height:100%; opacity: 0.06; }

.rt-root .static {
  position: absolute; inset:0; z-index: 40; pointer-events:none;
  opacity: 0; transition: opacity 0.08s; background-size: cover;
}
.rt-root .static.on { opacity: 0.95; }

.rt-root .roll {
  position:absolute; left:0; right:0; height: 22%; z-index:41;
  background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent);
  pointer-events:none; opacity:0; top:-25%;
}
.rt-root .roll.on { opacity:1; animation: rollDown 0.35s linear; }
@keyframes rollDown { from{top:-25%;} to{top:110%;} }

.rt-root .chnum {
  position:absolute; top:8%; right:9%; z-index:45;
  font-family:'Press Start 2P', monospace; font-size: clamp(10px, 2.6vw, 18px);
  color: var(--glow); text-shadow: 0 0 10px var(--glow);
  opacity:0; transition: opacity 0.2s;
}
.rt-root .chnum.show { opacity:1; }

.rt-root .powerline {
  position:absolute; left:0; right:0; top:50%; z-index:60;
  height: 100%; background:#fff; transform: translateY(-50%) scaleY(0);
  opacity:0; pointer-events:none;
}
.rt-root .screen.off .channel,
.rt-root .screen.off .scanlines,
.rt-root .screen.off #rt-noise,
.rt-root .screen.off .flicker { opacity:0 !important; }
.rt-root .screen.off { background:#000; }

.rt-root .powerline.collapsing { animation: collapse 0.45s forwards; }
@keyframes collapse {
  0% { transform: translateY(-50%) scaleY(1); opacity:1; }
  60% { transform: translateY(-50%) scaleY(0.012); opacity:1; }
  100% { transform: translateY(-50%) scaleY(0.012) scaleX(0.001); opacity:1; }
}
.rt-root .powerline.expanding { animation: expand 0.45s forwards; }
@keyframes expand {
  0% { transform: translateY(-50%) scaleY(0.012) scaleX(0.001); opacity:1; }
  40% { transform: translateY(-50%) scaleY(0.012) scaleX(1); opacity:1; }
  100% { transform: translateY(-50%) scaleY(1); opacity:0; }
}

.rt-root .brand {
  position:absolute; bottom:6px; left:50%; transform:translateX(-50%);
  font-family:'Press Start 2P', monospace; font-size:8px;
  color: rgba(255,255,255,0.35); letter-spacing:2px;
}

.rt-root .panel {
  display:flex; flex-direction:column; align-items:center;
  justify-content:center; gap:18px; padding:10px 0;
}
@media (max-width:560px){ .rt-root .panel { flex-direction:row; flex-wrap:wrap; gap:14px; } }

.rt-root .speaker {
  width:100%; height:46px; border-radius:6px;
  background: repeating-linear-gradient(90deg,#1a1109 0 3px,#2c1d10 3px 6px);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.7); margin-bottom:4px;
}
@media (max-width:560px){ .rt-root .speaker{display:none;} }

.rt-root .knob-group { display:flex; flex-direction:column; align-items:center; gap:5px; }
.rt-root .knob {
  width:62px; height:62px; border-radius:50%; cursor:pointer; border:none;
  background: radial-gradient(circle at 35% 30%, #4a4a4a, var(--knob) 70%);
  box-shadow: 0 4px 8px rgba(0,0,0,0.6), inset 0 2px 3px rgba(255,255,255,0.15);
  position:relative; transition: transform 0.08s;
  display:flex; align-items:center; justify-content:center;
}
.rt-root .knob::after {
  content:""; position:absolute; top:8px; width:4px; height:18px;
  background:var(--amber); border-radius:2px; box-shadow:0 0 6px var(--amber);
}
.rt-root .knob:hover { filter:brightness(1.2); }
.rt-root .knob:active { transform: rotate(28deg) scale(0.96); }
.rt-root .knob.power::after { background:#ff5252; box-shadow:0 0 6px #ff5252; }
.rt-root .knob-label { font-family:'Press Start 2P', monospace; font-size:7px; color:#e9d2b0; letter-spacing:1px; }

.rt-root .mute-btn {
  margin-top:4px; padding:7px 9px; border:none; border-radius:6px; cursor:pointer;
  font-family:'Press Start 2P', monospace; font-size:8px; letter-spacing:1px;
  color:#0a140d; background: var(--glow);
  box-shadow: 0 3px 0 #1a6b3c, inset 0 1px 1px rgba(255,255,255,0.4);
  transition: transform 0.06s, box-shadow 0.06s, filter 0.1s;
}
.rt-root .mute-btn:hover { filter:brightness(1.1); }
.rt-root .mute-btn:active { transform: translateY(3px); box-shadow: 0 0 0 #1a6b3c; }
.rt-root .mute-btn.muted { background:#6a4a4a; color:#ffd9d9; box-shadow: 0 3px 0 #3a2020; }

.rt-root .remote {
  position:absolute; right:-120px; top:40px; width:96px;
  padding:14px 12px; border-radius:16px;
  background: linear-gradient(160deg,#2a2a2a,#111);
  box-shadow: 0 16px 30px rgba(0,0,0,0.7), inset 0 1px 2px rgba(255,255,255,0.1);
  display:flex; flex-direction:column; gap:8px; align-items:center;
}
@media (max-width: 1024px){
  .rt-root .remote { position:static; right:auto; top:auto; width:min(420px,92vw);
    flex-direction:row; flex-wrap:wrap; justify-content:center; }
}
.rt-root .remote .r-label { font-family:'Press Start 2P', monospace; font-size:7px; color:#888; width:100%; text-align:center; }
.rt-root .rbtn {
  width:56px; height:38px; border:none; border-radius:8px; cursor:pointer;
  background: linear-gradient(#3a3a3a,#1d1d1d); color:#cde;
  font-family:'Press Start 2P', monospace; font-size:9px;
  box-shadow: 0 3px 0 #000, inset 0 1px 1px rgba(255,255,255,0.15);
  transition: transform 0.06s, box-shadow 0.06s;
}
.rt-root .rbtn:hover { filter:brightness(1.25); }
.rt-root .rbtn:active { transform: translateY(3px); box-shadow: 0 0 0 #000; }
.rt-root .rbtn.power { color:#ff6b6b; }
.rt-root .rbtn.ch { width:118px; }
@media (max-width:1024px){ .rt-root .rbtn.ch{width:56px;} }

.rt-root .caption {
  font-family:'Press Start 2P', monospace; font-size:9px; color:#6a6a7a;
  text-align:center; letter-spacing:1px; line-height:1.8;
}
`

const channels = [
  {
    cls: "ch0",
    html: `
      <div class="testcard"></div>
      <div class="profile-card">
        <div class="profile-avatar">DJ</div>
        <h1 class="profile-name">DJJ</h1>
        <p class="profile-title">科技与文化融合 · 产品设计师</p>
        <p class="profile-bio">专注互动营销与前端开发，擅长将传统文化通过 AR、Web 互动等数字技术焕新呈现。探索京剧脸谱、品牌快闪体验等创意项目。</p>
        <div class="profile-links">
          <a href="https://github.com/djj-WWW" target="_blank" class="profile-link">
            <svg viewBox="0 0 24 24" fill="currentColor" class="profile-icon"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="mailto:djj@example.com" class="profile-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="profile-icon"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
            邮箱
          </a>
        </div>
      </div>
      <div class="ch-hint">按 → 浏览作品频道</div>
    `,
  },
  {
    cls: "ch1",
    html: `
      <img src="/opera-mask.png" class="shot shot1" style="object-fit:cover;background:none;" />
      <div class="ch-title">京剧脸谱 AR</div>
      <div class="ch-desc">MediaPipe 人脸检测 + Canvas 实时变脸，5 种行当面具 AR 叠加。</div>
      <a href="https://opera-mask-ar.pages.dev/opera-mask-ar.html" target="_blank" class="ch-hint" style="text-decoration:none;">查看作品 &gt;</a>
    `,
  },
  {
    cls: "ch2",
    html: `
      <div class="shot shot2"></div>
      <div class="ch-title">作品 二</div>
      <div class="ch-desc">暖色调设计 · 作品简介占位文字。</div>
      <div class="ch-hint">查看详情 &gt;</div>
    `,
  },
  {
    cls: "ch3",
    html: `
      <div class="shot shot3"></div>
      <div class="ch-title">作品 三</div>
      <div class="ch-desc">冷色科技感 · 作品简介占位文字。</div>
      <div class="ch-hint">查看详情 &gt;</div>
    `,
  },
  {
    cls: "ch4",
    html: `
      <div class="shot shot4"></div>
      <div class="ch-title">作品 四</div>
      <div class="ch-desc">复古游戏风 · 作品简介占位文字。</div>
      <div class="ch-hint">查看详情 &gt;</div>
    `,
  },
]

export default function Page() {
  useEffect(() => {
    const host = document.getElementById("rt-host")!
    const screen = document.getElementById("rt-screen")!
    const staticEl = document.getElementById("rt-static")!
    const roll = document.getElementById("rt-roll")!
    const chnum = document.getElementById("rt-chnum")!
    const powerline = document.getElementById("rt-powerline") as HTMLElement

    let current = 0
    let isOn = true
    let switching = false
    let rafId = 0
    let staticTimer: ReturnType<typeof setTimeout>
    let numTimer: ReturnType<typeof setTimeout>

    // ---------- 音效引擎 (Web Audio API) ----------
    type AC = AudioContext & { _hum?: { osc: OscillatorNode; gain: GainNode } }
    let actx: AC | null = null
    let master: GainNode | null = null
    let muted = false

    function ensureAudio() {
      if (!actx) {
        const Ctor = window.AudioContext || (window as any).webkitAudioContext
        if (!Ctor) return null
        actx = new Ctor() as AC
        master = actx.createGain()
        master.gain.value = muted ? 0 : 0.6
        master.connect(actx.destination)
      }
      if (actx.state === "suspended") actx.resume()
      return actx
    }

    // 缓存白噪声 buffer
    let noiseBuf: AudioBuffer | null = null
    function getNoise(ac: AC) {
      if (!noiseBuf) {
        noiseBuf = ac.createBuffer(1, ac.sampleRate * 1, ac.sampleRate)
        const data = noiseBuf.getChannelData(0)
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
      }
      return noiseBuf
    }

    // 换台沙沙声
    function sfxStatic(dur = 0.28) {
      const ac = ensureAudio()
      if (!ac || !master) return
      const src = ac.createBufferSource()
      src.buffer = getNoise(ac)
      src.loop = true
      const bp = ac.createBiquadFilter()
      bp.type = "highpass"
      bp.frequency.value = 1200
      const g = ac.createGain()
      const t = ac.currentTime
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(0.5, t + 0.02)
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
      src.connect(bp).connect(g).connect(master)
      src.start(t)
      src.stop(t + dur + 0.05)
    }

    // 按钮/旋钮咔哒声
    function sfxClick() {
      const ac = ensureAudio()
      if (!ac || !master) return
      const t = ac.currentTime
      const src = ac.createBufferSource()
      src.buffer = getNoise(ac)
      const bp = ac.createBiquadFilter()
      bp.type = "bandpass"
      bp.frequency.value = 2200
      bp.Q.value = 1.4
      const g = ac.createGain()
      g.gain.setValueAtTime(0.4, t)
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05)
      src.connect(bp).connect(g).connect(master)
      src.start(t)
      src.stop(t + 0.06)
    }

    // CRT 关机：低频"砰" + 高频啸叫下滑
    function sfxPowerOff() {
      const ac = ensureAudio()
      if (!ac || !master) return
      const t = ac.currentTime
      // 砰
      const thump = ac.createOscillator()
      thump.type = "sine"
      thump.frequency.setValueAtTime(150, t)
      thump.frequency.exponentialRampToValueAtTime(40, t + 0.18)
      const tg = ac.createGain()
      tg.gain.setValueAtTime(0.7, t)
      tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.25)
      thump.connect(tg).connect(master)
      thump.start(t)
      thump.stop(t + 0.3)
      // 高频下滑啸叫
      const whine = ac.createOscillator()
      whine.type = "triangle"
      whine.frequency.setValueAtTime(9000, t)
      whine.frequency.exponentialRampToValueAtTime(400, t + 0.4)
      const wg = ac.createGain()
      wg.gain.setValueAtTime(0.12, t)
      wg.gain.exponentialRampToValueAtTime(0.0001, t + 0.42)
      whine.connect(wg).connect(master)
      whine.start(t)
      whine.stop(t + 0.45)
    }

    // CRT 开机：高压"嗡"上扬 + 静电
    function sfxPowerOn() {
      const ac = ensureAudio()
      if (!ac || !master) return
      const t = ac.currentTime
      const sweep = ac.createOscillator()
      sweep.type = "sawtooth"
      sweep.frequency.setValueAtTime(60, t)
      sweep.frequency.exponentialRampToValueAtTime(220, t + 0.25)
      const sg = ac.createGain()
      sg.gain.setValueAtTime(0.0001, t)
      sg.gain.exponentialRampToValueAtTime(0.25, t + 0.05)
      sg.gain.exponentialRampToValueAtTime(0.0001, t + 0.35)
      sweep.connect(sg).connect(master)
      sweep.start(t)
      sweep.stop(t + 0.4)
      sfxStatic(0.18)
    }

    // 开机底噪嗡鸣 (CRT 15.7kHz 行频的低音版)
    function startHum() {
      const ac = ensureAudio()
      if (!ac || !master || ac._hum) return
      const osc = ac.createOscillator()
      osc.type = "sine"
      osc.frequency.value = 120
      const g = ac.createGain()
      g.gain.value = 0.015
      osc.connect(g).connect(master)
      osc.start()
      ac._hum = { osc, gain: g }
    }
    function stopHum() {
      if (actx?._hum) {
        try {
          actx._hum.osc.stop()
        } catch {}
        actx._hum = undefined
      }
    }

    // build channels
    host.innerHTML = ""
    channels.forEach((c, i) => {
      const div = document.createElement("div")
      div.className = "channel " + c.cls + (i === 0 ? " active" : "")
      div.innerHTML = c.html
      div.dataset.index = String(i)
      host.appendChild(div)
    })
    const channelEls = Array.from(host.querySelectorAll<HTMLElement>(".channel"))

    function showChannel(i: number) {
      channelEls.forEach((el) => el.classList.toggle("active", Number(el.dataset.index) === i))
    }
    function flashNum(i: number) {
      chnum.textContent = "CH " + i
      chnum.classList.add("show")
      clearTimeout(numTimer)
      numTimer = setTimeout(() => chnum.classList.remove("show"), 1400)
    }
    function changeTo(i: number) {
      if (!isOn || switching) return
      i = (i + channels.length) % channels.length
      if (i === current) {
        flashNum(i)
        return
      }
      switching = true
      sfxStatic()
      staticEl.classList.add("on")
      roll.classList.remove("on")
      void roll.offsetWidth
      roll.classList.add("on")
      setTimeout(() => {
        current = i
        showChannel(i)
        flashNum(i)
      }, 180)
      setTimeout(() => {
        staticEl.classList.remove("on")
        switching = false
      }, 320)
    }
    function setPower(on: boolean) {
      if (on === isOn) return
      isOn = on
      if (!on) {
        sfxPowerOff()
        stopHum()
        powerline.classList.remove("expanding")
        powerline.classList.add("collapsing")
        setTimeout(() => screen.classList.add("off"), 250)
        powerline.style.opacity = "1"
      } else {
        sfxPowerOn()
        screen.classList.remove("off")
        powerline.classList.remove("collapsing")
        powerline.classList.add("expanding")
        setTimeout(() => {
          powerline.style.opacity = "0"
          flashNum(current)
          startHum()
        }, 450)
      }
    }

    // canvas noise
    const canvas = document.getElementById("rt-noise") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")!
    function resize() {
      canvas.width = Math.max(2, screen.clientWidth / 2)
      canvas.height = Math.max(2, screen.clientHeight / 2)
    }
    resize()
    window.addEventListener("resize", resize)
    function drawNoise() {
      const img = ctx.createImageData(canvas.width, canvas.height)
      const d = img.data
      for (let p = 0; p < d.length; p += 4) {
        const v = Math.random() * 255
        d[p] = d[p + 1] = d[p + 2] = v
        d[p + 3] = 255
      }
      ctx.putImageData(img, 0, 0)
      rafId = requestAnimationFrame(drawNoise)
    }
    drawNoise()

    function drawStatic() {
      if (staticEl.classList.contains("on")) {
        const c = document.createElement("canvas")
        c.width = 80
        c.height = 60
        const sc = c.getContext("2d")!
        const im = sc.createImageData(80, 60)
        for (let p = 0; p < im.data.length; p += 4) {
          const v = Math.random() * 255
          im.data[p] = im.data[p + 1] = im.data[p + 2] = v
          im.data[p + 3] = 255
        }
        sc.putImageData(im, 0, 0)
        staticEl.style.backgroundImage = "url(" + c.toDataURL() + ")"
      }
      staticTimer = setTimeout(drawStatic, 60)
    }
    drawStatic()

    // 首次交互时启动底噪嗡鸣
    let humStarted = false
    function maybeStartHum() {
      if (!humStarted && isOn) {
        humStarted = true
        startHum()
      }
    }

    // events
    const onPrev = () => {
      sfxClick()
      maybeStartHum()
      changeTo(current - 1)
    }
    const onNext = () => {
      sfxClick()
      maybeStartHum()
      changeTo(current + 1)
    }
    const onPower = () => {
      sfxClick()
      humStarted = true
      setPower(!isOn)
    }
    document.getElementById("rt-knobPrev")!.addEventListener("click", onPrev)
    document.getElementById("rt-knobNext")!.addEventListener("click", onNext)
    document.getElementById("rt-knobPower")!.addEventListener("click", onPower)

    const remoteBtns = Array.from(document.querySelectorAll<HTMLElement>(".rt-root .remote .rbtn"))
    const remoteHandler = (btn: HTMLElement) => () => {
      sfxClick()
      if (btn.dataset.power !== undefined) {
        humStarted = true
        return setPower(!isOn)
      }
      maybeStartHum()
      if (btn.dataset.prev !== undefined) return changeTo(current - 1)
      if (btn.dataset.next !== undefined) return changeTo(current + 1)
      if (btn.dataset.ch !== undefined) return changeTo(Number(btn.dataset.ch))
    }
    const handlers = remoteBtns.map((btn) => {
      const h = remoteHandler(btn)
      btn.addEventListener("click", h)
      return [btn, h] as const
    })

    // 静音切换
    const muteBtn = document.getElementById("rt-mute")!
    const onMute = () => {
      muted = !muted
      ensureAudio()
      if (master) master.gain.value = muted ? 0 : 0.6
      muteBtn.textContent = muted ? "MUTE" : "SND"
      muteBtn.classList.toggle("muted", muted)
      muteBtn.setAttribute("aria-label", muted ? "取消静音" : "静音")
    }
    muteBtn.addEventListener("click", onMute)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") changeTo(current + 1)
      else if (e.key === "ArrowLeft") changeTo(current - 1)
      else if (e.key === " ") {
        e.preventDefault()
        setPower(!isOn)
      } else if (/^[0-4]$/.test(e.key)) changeTo(Number(e.key))
    }
    window.addEventListener("keydown", onKey)

    flashNum(0)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(staticTimer)
      clearTimeout(numTimer)
      window.removeEventListener("resize", resize)
      window.removeEventListener("keydown", onKey)
      document.getElementById("rt-knobPrev")?.removeEventListener("click", onPrev)
      document.getElementById("rt-knobNext")?.removeEventListener("click", onNext)
      document.getElementById("rt-knobPower")?.removeEventListener("click", onPower)
      document.getElementById("rt-mute")?.removeEventListener("click", onMute)
      handlers.forEach(([btn, h]) => btn.removeEventListener("click", h))
      stopHum()
      actx?.close()
    }
  }, [])

  return (
    <div className="rt-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="stage">
        <div className="tv" id="rt-tv">
          <div className="bezel">
            <div className="screen" id="rt-screen">
              <div className="channel-host" id="rt-host" />
              <canvas id="rt-noise" />
              <div className="static" id="rt-static" />
              <div className="roll" id="rt-roll" />
              <div className="scanlines" />
              <div className="flicker" />
              <div className="glass" />
              <div className="chnum" id="rt-chnum">
                CH 0
              </div>
              <div className="powerline" id="rt-powerline" />
              <div className="brand">VISIONIC</div>
            </div>
          </div>

          <div className="panel">
            <div className="speaker" />
            <div className="knob-group">
              <button className="knob" id="rt-knobPrev" aria-label="上一个频道" />
              <span className="knob-label">PREV</span>
            </div>
            <div className="knob-group">
              <button className="knob" id="rt-knobNext" aria-label="下一个频道" />
              <span className="knob-label">NEXT</span>
            </div>
            <div className="knob-group">
              <button className="knob power" id="rt-knobPower" aria-label="电源开关" />
              <span className="knob-label">POWER</span>
            </div>
            <button className="mute-btn" id="rt-mute" aria-label="静音">
              SND
            </button>
          </div>

          <div className="remote" aria-label="遥控器">
            <span className="r-label">REMOTE</span>
            <button className="rbtn power" data-power="" aria-label="电源">
              PWR
            </button>
            <button className="rbtn ch" data-prev="" aria-label="上一个频道">
              CH-
            </button>
            <button className="rbtn ch" data-next="" aria-label="下一个频道">
              CH+
            </button>
            <button className="rbtn" data-ch="0">
              0
            </button>
            <button className="rbtn" data-ch="1">
              1
            </button>
            <button className="rbtn" data-ch="2">
              2
            </button>
            <button className="rbtn" data-ch="3">
              3
            </button>
            <button className="rbtn" data-ch="4">
              4
            </button>
          </div>
        </div>

        <p className="caption">点击旋钮或遥控器换台 · 数字键直达频道</p>
      </div>
    </div>
  )
}
