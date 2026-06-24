(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,t=>{"use strict";var e=t.i(43476),a=t.i(71645);let r=`
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
`,o=[{cls:"ch0",html:`
      <div class="testcard"></div>
      <div class="profile-card">
        <div class="profile-avatar">DJ</div>
        <h1 class="profile-name">DJJ</h1>
        <p class="profile-title">科技与文化融合 \xb7 产品设计师</p>
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
    `},{cls:"ch1",html:`
      <img src="/opera-mask.png" class="shot shot1" style="object-fit:cover;background:none;" />
      <div class="ch-title">京剧脸谱 AR</div>
      <div class="ch-desc">MediaPipe 人脸检测 + Canvas 实时变脸，5 种行当面具 AR 叠加。</div>
      <a href="https://opera-mask-ar.pages.dev/opera-mask-ar.html" target="_blank" class="ch-hint" style="text-decoration:none;">查看作品 &gt;</a>
    `},{cls:"ch2",html:`
      <div class="shot shot2"></div>
      <div class="ch-title">作品 二</div>
      <div class="ch-desc">暖色调设计 \xb7 作品简介占位文字。</div>
      <div class="ch-hint">查看详情 &gt;</div>
    `},{cls:"ch3",html:`
      <div class="shot shot3"></div>
      <div class="ch-title">作品 三</div>
      <div class="ch-desc">冷色科技感 \xb7 作品简介占位文字。</div>
      <div class="ch-hint">查看详情 &gt;</div>
    `},{cls:"ch4",html:`
      <div class="shot shot4"></div>
      <div class="ch-title">作品 四</div>
      <div class="ch-desc">复古游戏风 \xb7 作品简介占位文字。</div>
      <div class="ch-hint">查看详情 &gt;</div>
    `}];t.s(["default",0,function(){return(0,a.useEffect)(()=>{let t,e,a=document.getElementById("rt-host"),r=document.getElementById("rt-screen"),n=document.getElementById("rt-static"),i=document.getElementById("rt-roll"),s=document.getElementById("rt-chnum"),l=document.getElementById("rt-powerline"),c=0,d=!0,p=!1,m=0,x=null,g=null,f=!1;function h(){if(!x){let t=window.AudioContext||window.webkitAudioContext;if(!t)return null;(g=(x=new t).createGain()).gain.value=.6*!f,g.connect(x.destination)}return"suspended"===x.state&&x.resume(),x}let b=null;function u(t){if(!b){let e=(b=t.createBuffer(1,+t.sampleRate,t.sampleRate)).getChannelData(0);for(let t=0;t<e.length;t++)e[t]=2*Math.random()-1}return b}function v(t=.28){let e=h();if(!e||!g)return;let a=e.createBufferSource();a.buffer=u(e),a.loop=!0;let r=e.createBiquadFilter();r.type="highpass",r.frequency.value=1200;let o=e.createGain(),n=e.currentTime;o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.5,n+.02),o.gain.exponentialRampToValueAtTime(1e-4,n+t),a.connect(r).connect(o).connect(g),a.start(n),a.stop(n+t+.05)}function w(){let t=h();if(!t||!g)return;let e=t.currentTime,a=t.createBufferSource();a.buffer=u(t);let r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=2200,r.Q.value=1.4;let o=t.createGain();o.gain.setValueAtTime(.4,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.05),a.connect(r).connect(o).connect(g),a.start(e),a.stop(e+.06)}function y(){let t=h();if(!t||!g||t._hum)return;let e=t.createOscillator();e.type="sine",e.frequency.value=120;let a=t.createGain();a.gain.value=.015,e.connect(a).connect(g),e.start(),t._hum={osc:e,gain:a}}function k(){if(x?._hum){try{x._hum.osc.stop()}catch{}x._hum=void 0}}a.innerHTML="",o.forEach((t,e)=>{let r=document.createElement("div");r.className="channel "+t.cls+(0===e?" active":""),r.innerHTML=t.html,r.dataset.index=String(e),a.appendChild(r)});let T=Array.from(a.querySelectorAll(".channel"));function j(t){s.textContent="CH "+t,s.classList.add("show"),clearTimeout(e),e=setTimeout(()=>s.classList.remove("show"),1400)}function N(t){if(d&&!p){if((t=(t+o.length)%o.length)===c)return void j(t);p=!0,v(),n.classList.add("on"),i.classList.remove("on"),i.offsetWidth,i.classList.add("on"),setTimeout(()=>{var e;c=t,e=t,T.forEach(t=>t.classList.toggle("active",Number(t.dataset.index)===e)),j(t)},180),setTimeout(()=>{n.classList.remove("on"),p=!1},320)}}function E(t){t!==d&&(d=t,t?(!function(){let t=h();if(!t||!g)return;let e=t.currentTime,a=t.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(60,e),a.frequency.exponentialRampToValueAtTime(220,e+.25);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.25,e+.05),r.gain.exponentialRampToValueAtTime(1e-4,e+.35),a.connect(r).connect(g),a.start(e),a.stop(e+.4),v(.18)}(),r.classList.remove("off"),l.classList.remove("collapsing"),l.classList.add("expanding"),setTimeout(()=>{l.style.opacity="0",j(c),y()},450)):(!function(){let t=h();if(!t||!g)return;let e=t.currentTime,a=t.createOscillator();a.type="sine",a.frequency.setValueAtTime(150,e),a.frequency.exponentialRampToValueAtTime(40,e+.18);let r=t.createGain();r.gain.setValueAtTime(.7,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.25),a.connect(r).connect(g),a.start(e),a.stop(e+.3);let o=t.createOscillator();o.type="triangle",o.frequency.setValueAtTime(9e3,e),o.frequency.exponentialRampToValueAtTime(400,e+.4);let n=t.createGain();n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.42),o.connect(n).connect(g),o.start(e),o.stop(e+.45)}(),k(),l.classList.remove("expanding"),l.classList.add("collapsing"),setTimeout(()=>r.classList.add("off"),250),l.style.opacity="1"))}let P=document.getElementById("rt-noise"),A=P.getContext("2d");function L(){P.width=Math.max(2,r.clientWidth/2),P.height=Math.max(2,r.clientHeight/2)}L(),window.addEventListener("resize",L),!function t(){let e=A.createImageData(P.width,P.height),a=e.data;for(let t=0;t<a.length;t+=4){let e=255*Math.random();a[t]=a[t+1]=a[t+2]=e,a[t+3]=255}A.putImageData(e,0,0),m=requestAnimationFrame(t)}(),!function e(){if(n.classList.contains("on")){let t=document.createElement("canvas");t.width=80,t.height=60;let e=t.getContext("2d"),a=e.createImageData(80,60);for(let t=0;t<a.data.length;t+=4){let e=255*Math.random();a.data[t]=a.data[t+1]=a.data[t+2]=e,a.data[t+3]=255}e.putImageData(a,0,0),n.style.backgroundImage="url("+t.toDataURL()+")"}t=setTimeout(e,60)}();let z=!1;function B(){!z&&d&&(z=!0,y())}let I=()=>{w(),B(),N(c-1)},R=()=>{w(),B(),N(c+1)},S=()=>{w(),z=!0,E(!d)};document.getElementById("rt-knobPrev").addEventListener("click",I),document.getElementById("rt-knobNext").addEventListener("click",R),document.getElementById("rt-knobPower").addEventListener("click",S);let V=Array.from(document.querySelectorAll(".rt-root .remote .rbtn")).map(t=>{let e=()=>(w(),void 0!==t.dataset.power)?(z=!0,E(!d)):(B(),void 0!==t.dataset.prev)?N(c-1):void 0!==t.dataset.next?N(c+1):void 0!==t.dataset.ch?N(Number(t.dataset.ch)):void 0;return t.addEventListener("click",e),[t,e]}),C=document.getElementById("rt-mute"),Y=()=>{f=!f,h(),g&&(g.gain.value=.6*!f),C.textContent=f?"MUTE":"SND",C.classList.toggle("muted",f),C.setAttribute("aria-label",f?"取消静音":"静音")};C.addEventListener("click",Y);let q=t=>{"ArrowRight"===t.key?N(c+1):"ArrowLeft"===t.key?N(c-1):" "===t.key?(t.preventDefault(),E(!d)):/^[0-4]$/.test(t.key)&&N(Number(t.key))};return window.addEventListener("keydown",q),j(0),()=>{cancelAnimationFrame(m),clearTimeout(t),clearTimeout(e),window.removeEventListener("resize",L),window.removeEventListener("keydown",q),document.getElementById("rt-knobPrev")?.removeEventListener("click",I),document.getElementById("rt-knobNext")?.removeEventListener("click",R),document.getElementById("rt-knobPower")?.removeEventListener("click",S),document.getElementById("rt-mute")?.removeEventListener("click",Y),V.forEach(([t,e])=>t.removeEventListener("click",e)),k(),x?.close()}},[]),(0,e.jsxs)("div",{className:"rt-root",children:[(0,e.jsx)("style",{dangerouslySetInnerHTML:{__html:r}}),(0,e.jsxs)("div",{className:"stage",children:[(0,e.jsxs)("div",{className:"tv",id:"rt-tv",children:[(0,e.jsx)("div",{className:"bezel",children:(0,e.jsxs)("div",{className:"screen",id:"rt-screen",children:[(0,e.jsx)("div",{className:"channel-host",id:"rt-host"}),(0,e.jsx)("canvas",{id:"rt-noise"}),(0,e.jsx)("div",{className:"static",id:"rt-static"}),(0,e.jsx)("div",{className:"roll",id:"rt-roll"}),(0,e.jsx)("div",{className:"scanlines"}),(0,e.jsx)("div",{className:"flicker"}),(0,e.jsx)("div",{className:"glass"}),(0,e.jsx)("div",{className:"chnum",id:"rt-chnum",children:"CH 0"}),(0,e.jsx)("div",{className:"powerline",id:"rt-powerline"}),(0,e.jsx)("div",{className:"brand",children:"VISIONIC"})]})}),(0,e.jsxs)("div",{className:"panel",children:[(0,e.jsx)("div",{className:"speaker"}),(0,e.jsxs)("div",{className:"knob-group",children:[(0,e.jsx)("button",{className:"knob",id:"rt-knobPrev","aria-label":"上一个频道"}),(0,e.jsx)("span",{className:"knob-label",children:"PREV"})]}),(0,e.jsxs)("div",{className:"knob-group",children:[(0,e.jsx)("button",{className:"knob",id:"rt-knobNext","aria-label":"下一个频道"}),(0,e.jsx)("span",{className:"knob-label",children:"NEXT"})]}),(0,e.jsxs)("div",{className:"knob-group",children:[(0,e.jsx)("button",{className:"knob power",id:"rt-knobPower","aria-label":"电源开关"}),(0,e.jsx)("span",{className:"knob-label",children:"POWER"})]}),(0,e.jsx)("button",{className:"mute-btn",id:"rt-mute","aria-label":"静音",children:"SND"})]}),(0,e.jsxs)("div",{className:"remote","aria-label":"遥控器",children:[(0,e.jsx)("span",{className:"r-label",children:"REMOTE"}),(0,e.jsx)("button",{className:"rbtn power","data-power":"","aria-label":"电源",children:"PWR"}),(0,e.jsx)("button",{className:"rbtn ch","data-prev":"","aria-label":"上一个频道",children:"CH-"}),(0,e.jsx)("button",{className:"rbtn ch","data-next":"","aria-label":"下一个频道",children:"CH+"}),(0,e.jsx)("button",{className:"rbtn","data-ch":"0",children:"0"}),(0,e.jsx)("button",{className:"rbtn","data-ch":"1",children:"1"}),(0,e.jsx)("button",{className:"rbtn","data-ch":"2",children:"2"}),(0,e.jsx)("button",{className:"rbtn","data-ch":"3",children:"3"}),(0,e.jsx)("button",{className:"rbtn","data-ch":"4",children:"4"})]})]}),(0,e.jsx)("p",{className:"caption",children:"点击旋钮或遥控器换台 · 数字键直达频道"})]})]})}])}]);