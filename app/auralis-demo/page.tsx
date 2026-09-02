'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { auralisDemo, type DemoStage } from '../../src/data/auralis-demo';
import './demo.css';

const stages: Array<{ id: DemoStage; number: string; label: string; note: string }> = [
  { id: 'source', number: '01', label: '输入故事', note: '定义本次改编任务' },
  { id: 'roles', number: '02', label: '确认人物', note: '编辑角色和说话方式' },
  { id: 'script', number: '03', label: '审阅台本', note: '确认对白与声音结构' },
  { id: 'production', number: '04', label: '逐句制作', note: '试听、重生成、导出' },
];

const stageCopy: Record<DemoStage, { eyebrow: string; title: string; status: string }> = {
  source: { eyebrow: 'STEP 01 / SOURCE', title: '先给 Auralis 一个真实任务', status: '等待输入' },
  roles: { eyebrow: 'STEP 02 / CHARACTERS', title: '让人物先成为可编辑的中间结果', status: '等待确认' },
  script: { eyebrow: 'STEP 03 / SCRIPT REVIEW', title: '把故事变成可以审阅的声音结构', status: '等待审阅' },
  production: { eyebrow: 'STEP 04 / PRODUCTION', title: '逐句试听，保留精修空间', status: '已完成' },
};

export default function AuralisDemoPage() {
  const [stage, setStage] = useState<DemoStage>('source');
  const [source, setSource] = useState('');
  const [instruction, setInstruction] = useState(auralisDemo.instruction);
  const [roles, setRoles] = useState(auralisDemo.roles.map((role) => ({ ...role })));
  const [toast, setToast] = useState('');
  const [busy, setBusy] = useState(false);
  const [revised, setRevised] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);
  const activeOscillator = useRef<OscillatorNode | null>(null);

  const currentIndex = stages.findIndex((item) => item.id === stage);
  const copy = stageCopy[stage];
  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2800);
  };
  const transition = (nextStage: DemoStage, message: string) => {
    setBusy(true);
    window.setTimeout(() => { setBusy(false); setStage(nextStage); notify(message); }, 700);
  };
  const loadExample = () => { setSource(auralisDemo.sourceText); notify('示例片段已载入，可以直接开始体验'); };
  const playTone = (frequency: number, number: string) => {
    activeOscillator.current?.stop();
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) { notify('当前浏览器不支持试听'); return; }
    audioContext.current ??= new AudioContextClass();
    const oscillator = audioContext.current.createOscillator();
    const gain = audioContext.current.createGain();
    oscillator.type = 'sine'; oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, audioContext.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, audioContext.current.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.current.currentTime + 1.2);
    oscillator.connect(gain).connect(audioContext.current.destination); oscillator.start(); oscillator.stop(audioContext.current.currentTime + 1.25);
    activeOscillator.current = oscillator; notify(`正在播放第 ${number} 句静态试听音`);
  };
  const reset = () => { activeOscillator.current?.stop(); setSource(''); setStage('source'); setRevised(false); notify('已清空当前 Demo，可以重新开始'); };

  return <div className="auralis-demo-shell">
    <header className="auralis-demo-topbar">
      <Link className="auralis-demo-brand" href="/"><span className="demo-brand-mark">Z.</span><span>Auralis <small>/ static demo</small></span></Link>
      <div className="demo-top-status"><i />无需 API · 本地模拟</div>
      <Link className="demo-back-link" href="/">返回 Portfolio <span>↗</span></Link>
    </header>

    <main>
      <section className="demo-intro">
        <div><p className="demo-eyebrow">INTERACTIVE WALKTHROUGH / 03 MIN</p><h1>把一段故事，<br /><em>做成可听的场景。</em></h1><p className="demo-intro-copy">这是 Auralis 的静态体验版。沿着一条真实制作路径走一遍：输入文本、确认人物、审阅台本，再试听逐句音频。</p></div>
        <div className="demo-intro-note"><span>设计意图</span><strong>AI 不替你做决定，<br />而是把每个决定变得可见。</strong></div>
      </section>

      <section className="auralis-workspace" aria-label="Auralis 制作工作台">
        <aside className="demo-sidebar">
          <div className="demo-workspace-label"><span>{auralisDemo.project.label}</span><span>DEMO</span></div>
          <h2>{auralisDemo.project.title}</h2><p className="demo-project-caption">{auralisDemo.project.caption}</p>
          <nav className="demo-steps" aria-label="制作步骤">{stages.map((item, index) => <button className={`demo-step ${index <= currentIndex ? 'active' : ''}`} key={item.id} type="button" onClick={() => index <= currentIndex ? setStage(item.id) : notify('请完成当前步骤后再继续')}><span>{item.number}</span><span>{item.label}<small>{item.note}</small></span><i /></button>)}</nav>
          <div className="demo-sidebar-footer"><i /> DEMO STATE <strong>{copy.status}</strong></div>
        </aside>

        <section className="demo-stage-panel">
          <div className="demo-stage-head"><div><p className="demo-eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div><span className="demo-save-state">● 自动保存</span></div>
          {stage === 'source' && <div className="demo-stage-content">
            <label htmlFor="demo-source">小说片段 <span>建议 80–500 字</span></label><textarea id="demo-source" rows={9} value={source} onChange={(event) => setSource(event.target.value)} placeholder="把一段小说、剧本或故事梗概粘贴到这里……" />
            <div className="demo-source-tools"><button className="demo-ghost-button" type="button" onClick={loadExample}>载入示例片段</button><span>{source.trim().length} 字</span></div>
            <label htmlFor="demo-instruction">改编要求 <span>可选</span></label><input id="demo-instruction" value={instruction} onChange={(event) => setInstruction(event.target.value)} />
            <div className="demo-action-row"><span className="demo-hint"><i>i</i> Demo 会在浏览器中模拟 AI 分析，不会上传文本。</span><button className="demo-primary-button" type="button" disabled={busy} onClick={() => source.trim().length < 20 ? notify('请先输入至少 20 个字，或载入示例片段') : transition('roles', '解析完成：已识别人物、关系和场景')}>{busy ? '解析中…' : <>开始解析 <span>→</span></>}</button></div>
          </div>}
          {stage === 'roles' && <div className="demo-stage-content">
            <div className="demo-stage-intro"><b>✓</b><div><strong>识别到 2 个主要人物</strong><p>请确认人物身份和说话方式。可编辑内容会影响后续台本。</p></div></div>
            <div className="demo-role-grid">{roles.map((role, index) => <article className="demo-role-card" key={role.name}><div className="demo-role-head"><span>{role.avatar}</span><div><strong>{role.name}</strong><small>{role.role}</small></div></div><label htmlFor={`role-${role.name}`}>说话方式<input id={`role-${role.name}`} value={role.voice} onChange={(event) => setRoles(roles.map((item, itemIndex) => itemIndex === index ? { ...item, voice: event.target.value } : item))} /></label></article>)}</div>
            <div className="demo-action-row"><span className="demo-hint">先确认人物，AI 才会继续写台本。</span><button className="demo-primary-button" type="button" disabled={busy} onClick={() => transition('script', '台本初稿已生成，AI 审查通过')}>{busy ? '生成中…' : <>确认人物并生成台本 <span>→</span></>}</button></div>
          </div>}
          {stage === 'script' && <div className="demo-stage-content">
            <div className="demo-review-banner"><span>AI REVIEW / PASSED</span><strong>台本初稿已生成，建议先看声音结构。</strong><p>审查结果：对白自然度良好 · 旁白占比 {revised ? '12' : '18'}% · 音效提示 3 条</p></div>
            <div className="demo-script-card">{auralisDemo.script.map((line) => <div className="demo-script-line" key={line.text}><span className={`demo-line-type ${line.kind}`}>{line.type}</span><p>{revised && line.kind === 'narration' ? '雨声压过楼道的灯，林默站在门外。' : line.text}</p></div>)}</div>
            <div className="demo-action-row"><button className="demo-ghost-button" type="button" onClick={() => { setRevised(true); notify('已模拟返修：旁白段落减少 1 条'); }}>{revised ? '已减少旁白' : '减少旁白'}</button><button className="demo-primary-button" type="button" disabled={busy} onClick={() => transition('production', '已建立逐句制作单元')}>{busy ? '建立中…' : <>台本满意，进入逐句制作 <span>→</span></>}</button></div>
          </div>}
          {stage === 'production' && <div className="demo-stage-content">
            <div className="demo-production-summary"><div><p className="demo-eyebrow">SCENE 01 / RAINY NIGHT</p><h3>楼道 · 重逢前夜</h3></div><span>3 / 4 已就绪</span></div>
            <div className="demo-audio-list">{auralisDemo.audioLines.map((line) => <div className="demo-audio-item" key={line.number}><span className="demo-audio-number">{line.number}</span><div><strong>{line.speaker}</strong><p>{line.text}</p></div><div className="demo-audio-actions"><button className="demo-play-button" type="button" aria-label={`播放第 ${line.number} 句`} onClick={() => playTone(line.frequency, line.number)}>▶</button><button className="demo-regen-button" type="button" onClick={() => notify(`第 ${line.number} 句已生成新的试听版本`)}>重生成</button></div></div>)}</div>
            <div className="demo-action-row"><span className="demo-hint">每句都可以单独重生成，保留可逆的编辑空间。</span><button className="demo-primary-button" type="button" onClick={reset}>重新体验 <span>↻</span></button></div>
          </div>}
        </section>
      </section>

      <section className="demo-principles"><p className="demo-eyebrow">WHAT THIS DEMO SHOWS</p><div>{[['01', '固定生产线', '把复杂的 AI 能力拆成可理解的阶段，用户知道现在发生什么、下一步是什么。'], ['02', '人类确认点', '人物和台本不是黑盒产物，而是可以编辑、比较、确认的中间结果。'], ['03', '可恢复体验', '逐句音频支持单独试听和重生成，失败不会让整个项目从头开始。']].map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    </main>
    <footer className="demo-footer"><span>© 2026 Z. / Auralis</span><span>静态 Demo · 体验数据不会上传</span></footer>
    {toast && <div className="demo-toast" role="status" aria-live="polite">{toast}</div>}
  </div>;
}
