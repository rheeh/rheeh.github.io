'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { profile, projects, type Project } from '../src/data/profile';
import { analysisShowcases, reports } from '../src/data/reports';

const navItems: Array<[string, string, string]> = [
  ['01', '项目', 'work'],
  ['02', '分析', 'insights'],
  ['03', '联系', 'contact'],
];

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const analysisCount = reports.length + analysisShowcases.length;

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [selected]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="nav-shell">
        <nav className="nav container" aria-label="站点导航">
          <a className="brand" href="#top" aria-label="返回首页顶部">
            <span className="brand-mark">Z.</span>
            <span className="brand-copy">
              <b>PROJECT INDEX</b>
              <small>PRODUCT / AI / GAMES</small>
            </span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="打开或关闭导航">
            Menu <span>{menuOpen ? '×' : '↘'}</span>
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map(([index, label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                <i>{index}</i><span>{label}</span>
              </a>
            ))}
          </div>
          <a className="nav-action" href="/reports/">分析目录</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero container" id="top">
          <div className="hero-main">
            <p className="hero-eyebrow">PROJECTS / CASE STUDIES / ANALYSIS</p>
            <h1>项目，<br /><em>先于自我介绍。</em></h1>
            <p className="hero-intro">这里按问题、行动与可验证产出组织内容：AI 产品、业务系统、游戏机制与研究工具。</p>
            <div className="hero-actions" aria-label="主要入口">
              <a className="btn-primary" href="#work">浏览项目 <span>↘</span></a>
              <a className="btn-quiet" href="/reports/">查看全部分析 <span>↗</span></a>
            </div>
          </div>

          <figure className="spec-card project-index-card" aria-label="作品目录摘要">
            <div className="spec-head"><span>INDEX / SELECTED WORK</span><b>OPEN ARCHIVE</b></div>
            <div className="index-visual" aria-hidden="true">
              <span>PROJECT</span><strong>INDEX</strong><i>{projects.length.toString().padStart(2, '0')}</i>
            </div>
            <dl className="spec-rows">
              <div><dt>PRODUCT</dt><dd>AI 工作流与业务系统</dd></div>
              <div><dt>ANALYSIS</dt><dd>平台、游戏与商业模式</dd></div>
              <div><dt>RESEARCH</dt><dd>数据、模型与证据边界</dd></div>
            </dl>
            <div className="spec-stats">
              <div><span>PROJECTS</span><strong>{projects.length.toString().padStart(2, '0')}</strong></div>
              <div><span>ANALYSES</span><strong>{analysisCount.toString().padStart(2, '0')}</strong></div>
              <div><span>LIVE DEMO</span><strong>01</strong></div>
            </div>
            <figcaption>每个条目只保留问题、贡献、产出与验证方式。</figcaption>
          </figure>
        </section>

        <section className="section container" id="work">
          <div className="section-head">
            <div><p className="section-index">01 — SELECTED PROJECTS</p><h2>项目目录</h2></div>
            <p>点击项目查看问题定义、具体行动与技术实现；可运行的项目提供独立 Demo。</p>
          </div>
          <div className="work-list">
            {projects.map((project, index) => (
              <motion.button className={`work-row ${index === 0 ? 'work-featured' : ''}`} key={project.id} onClick={() => setSelected(project)} whileTap={{ scale: 0.995 }}>
                <span className="work-num">{project.number}</span>
                <span className="work-title"><strong>{project.title}</strong><em className="work-type">{project.type}</em></span>
                <span className="work-summary">{project.summary}</span>
                <span className="work-tags">{project.tags.slice(0, 3).map((tag) => <small key={tag}>{tag}</small>)}</span>
                <span className="work-arrow" aria-hidden="true">↗</span>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="section notes" id="insights">
          <div className="container">
            <div className="section-head">
              <div><p className="section-index">02 — ANALYSIS LIBRARY</p><h2>分析目录</h2></div>
              <p>平台策略、AI 产品与游戏系统分析，包含站内长文和可交互演示。</p>
            </div>
            <div className="note-list">
              {reports.map((report) => (
                <a className="note-row" href={`/reports/${report.slug}/`} key={report.slug}>
                  <span className="note-num">{report.number}</span>
                  <span className="note-meta"><small>{report.category}</small><i>{report.readTime}</i></span>
                  <span className="note-copy"><strong className="note-title">{report.title}</strong><span className="note-summary">{report.summary}</span></span>
                  <span className="note-tags">{report.capabilityTags.slice(0, 3).map((tag) => <small key={tag}>{tag}</small>)}</span>
                  <span className="note-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="notes-all"><a href="/reports/">查看全部 {analysisCount} 份分析 <span>→</span></a></div>
          </div>
        </section>

        <section className="contact-strip" id="contact">
          <div className="container contact-strip-inner">
            <div><p className="section-index">03 — CONTACT</p><h2>项目与合作</h2></div>
            <a className="contact-mail" href={`mailto:${profile.contact.email}`}>{profile.contact.email} <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="footer container"><span>Z. — PROJECT INDEX</span><a href="#top">BACK TO TOP ↑</a></footer>

      <AnimatePresence>
        {selected && (
          <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.aside className="project-drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 240 }} onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="project-title">
              <button className="close-button" onClick={() => setSelected(null)} aria-label="关闭项目详情">Close <span>×</span></button>
              <div className={`drawer-art accent-${selected.accent}`}><span>{selected.number}</span><b>{selected.title.split(' ')[0]}</b></div>
              <p className="drawer-type">{selected.type}</p>
              <h2 id="project-title">{selected.title}</h2>
              <p className="drawer-overview">{selected.overview}</p>
              <h3>项目贡献</h3>
              <ul>{selected.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <h3>技术与工具</h3>
              <div className="tag-row">{selected.tools.map((tool) => <small key={tool}>{tool}</small>)}</div>
              {selected.demoUrl && <a className="drawer-demo-link" href={selected.demoUrl}>立即体验 Demo <span>↗</span></a>}
              <button className="next-project" onClick={() => setSelected(projects[(projects.findIndex((project) => project.id === selected.id) + 1) % projects.length])}>下一个项目 <span>→</span></button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
