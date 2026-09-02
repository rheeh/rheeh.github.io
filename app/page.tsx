'use client';

import { AnimatePresence, motion } from 'motion/react';
import { Fragment, useEffect, useState } from 'react';
import { profile, projects, research, type Project } from '../src/data/profile';
import { reports } from '../src/data/reports';

const principles = [
  {
    number: '01',
    title: '证据先于形容词',
    body: '先回答「发生了什么」，再回答「该怎么办」。公开事实、分析推断和方案建议，永远分开写。',
  },
  {
    number: '02',
    title: '把功能放回完整链路',
    body: '不孤立评价一个页面或一项 AI 能力，而是追踪用户从触发、决策、行动到反馈的完整过程。',
  },
  {
    number: '03',
    title: '用实验结束争论',
    body: '每个判断都落到一个可运行的原型、一项主指标和几条明确的护栏上，而不是停在观点表达。',
  },
];

const marqueeItems = [
  '证据先于形容词',
  'EVIDENCE BEFORE ADJECTIVES',
  '把功能放回完整链路',
  'FULL-CHAIN THINKING',
  '用实验结束争论',
  'SHIP TO LEARN',
];

const navItems: Array<[string, string, string]> = [
  ['01', '项目', 'work'],
  ['02', '分析', 'insights'],
  ['03', '方法', 'method'],
  ['04', '研究', 'research'],
];

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
              <b>PRODUCT PORTFOLIO</b>
              <small>AI / SYSTEMS / GAMES</small>
            </span>
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="打开或关闭导航"
          >
            Menu <span>{menuOpen ? '×' : '↘'}</span>
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map(([index, label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                <i>{index}</i>
                <span>{label}</span>
              </a>
            ))}
          </div>
          <a className="nav-action" href="#contact">联系我</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero container" id="top">
          <div className="hero-main">
            <p className="hero-eyebrow">PORTFOLIO 2026 — 产品 / AI / 系统</p>
            <h1>
              把模糊的问题，<br />
              做成<em>可以验证</em>的产品。
            </h1>
            <p className="hero-intro">
              我是 Z.，一名往产品方向走的 builder。做过 AI 客服的产品实习，独立跑通过
              0→1 的知识工具原型，也受过把「证据边界」当回事的科研训练。
            </p>
            <p className="hero-status">
              <i aria-hidden="true" />
              正在寻找 · 产品经理 / AI 产品 / 内容产品机会
            </p>
            <div className="hero-actions" aria-label="主要入口">
              <a className="btn-primary" href="#work">看看我做的 <span>↘</span></a>
              <a className="btn-quiet" href="#insights">读读我写的 <span>↘</span></a>
            </div>
          </div>

          <figure className="spec-card" aria-label="个人档案摘要">
            <div className="spec-head">
              <span>PROFILE / SPEC</span>
              <b>2026.08</b>
            </div>
            <div className="spec-visual" aria-hidden="true">
              <span className="spec-orbit" />
              <span className="spec-core">Z</span>
            </div>
            <dl className="spec-rows">
              <div><dt>ROLE</dt><dd>产品经理 · AI 方向</dd></div>
              <div><dt>BASE</dt><dd>{profile.location}</dd></div>
              <div><dt>STATUS</dt><dd>{profile.status}</dd></div>
            </dl>
            <div className="spec-stats">
              <div><span>BUILD</span><strong>{projects.length.toString().padStart(2, '0')}</strong></div>
              <div><span>NOTES</span><strong>{reports.length.toString().padStart(2, '0')}</strong></div>
              <div><span>RESEARCH</span><strong>01</strong></div>
            </div>
            <figcaption>产品、证据和实验，放在同一条公开轨道上。</figcaption>
          </figure>
        </section>
      </main>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span key={copy}>
              {marqueeItems.map((item) => (
                <Fragment key={item}>{item}<i>·</i></Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      <main>
        <section className="section container" id="work">
          <div className="section-head">
            <div>
              <p className="section-index">01 — SELECTED WORK</p>
              <h2>做的东西</h2>
            </div>
              <p>五个项目，五种问题：音频工作流、真实业务、0→1 原型、消费产品和科研工具。点开看问题、动作和验证方式。</p>
          </div>

          <div className="work-list">
            {projects.map((project, index) => (
              <motion.button
                className={`work-row ${index === 0 ? 'work-featured' : ''}`}
                key={project.id}
                onClick={() => setSelected(project)}
                whileTap={{ scale: 0.995 }}
              >
                <span className="work-num">{project.number}</span>
                <span className="work-title">
                  <strong>{project.title}</strong>
                  <em className="work-type">{project.type}</em>
                </span>
                <span className="work-summary">{project.summary}</span>
                <span className="work-tags">
                  {project.tags.slice(0, 3).map((tag) => <small key={tag}>{tag}</small>)}
                </span>
                <span className="work-arrow" aria-hidden="true">↗</span>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="section notes" id="insights">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-index">02 — PRODUCT NOTES</p>
                <h2>写的东西</h2>
              </div>
              <p>每篇只回答一个具体问题：先列证据，再给判断，最后落到可以验证的动作。</p>
            </div>

            <div className="note-list">
              {reports.map((report) => (
                <a className="note-row" href={`/reports/${report.slug}/`} key={report.slug}>
                  <span className="note-num">{report.number}</span>
                  <span className="note-meta">
                    <small>{report.category}</small>
                    <i>{report.readTime}</i>
                  </span>
                  <span className="note-copy">
                    <strong className="note-title">{report.title}</strong>
                    <span className="note-summary">{report.summary}</span>
                  </span>
                  <span className="note-tags">
                    {report.capabilityTags.slice(0, 3).map((tag) => <small key={tag}>{tag}</small>)}
                  </span>
                  <span className="note-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="notes-all"><a href="/reports/">全部分析文档 <span>→</span></a></div>
          </div>
        </section>

        <section className="section container" id="method">
          <div className="section-head">
            <div>
              <p className="section-index">03 — OPERATING PRINCIPLES</p>
              <h2>怎么判断</h2>
            </div>
            <p>比「我是谁」更重要的是：面对一个模糊的问题，我如何减少猜测，把它推向前。</p>
          </div>
          <div className="principles">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="research" id="research">
          <div className="container research-inner">
            <div>
              <p className="section-index">04 — RESEARCH / ONGOING</p>
              <h2>{research.title}</h2>
            </div>
            <p>{research.description}</p>
            <div className="research-side">
              <span>STATUS</span>
              <strong>ONGOING</strong>
              <div className="research-concepts">
                {research.concepts.map((concept) => <small key={concept}>{concept}</small>)}
              </div>
            </div>
          </div>
        </section>

        <section className="contact container" id="contact">
          <p className="section-index">CONTACT — OPEN CHANNEL</p>
          <h2>
            带着具体问题来，<br />
            我们把答案<em>做成产品</em>。
          </h2>
          <p className="contact-sub">如果你也在做 AI、内容或游戏产品，欢迎来聊——越具体越好。</p>
          <a className="contact-mail" href={`mailto:${profile.contact.email}`}>
            {profile.contact.email} <span>↗</span>
          </a>
          <div className="contact-deco" aria-hidden="true">
            BUILD IN PUBLIC · EVIDENCE BEFORE ADJECTIVES ·
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 Z. — PRODUCT PORTFOLIO</span>
        <span>{profile.location.toUpperCase()}</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.aside
              className="project-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 240 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
            >
              <button className="close-button" onClick={() => setSelected(null)} aria-label="关闭项目详情">
                Close <span>×</span>
              </button>
              <div className={`drawer-art accent-${selected.accent}`}>
                <span>{selected.number}</span>
                <b>{selected.title.split(' ')[0]}</b>
              </div>
              <p className="drawer-type">{selected.type}</p>
              <h2 id="project-title">{selected.title}</h2>
              <p className="drawer-overview">{selected.overview}</p>
              <h3>我做了什么</h3>
              <ul>
                {selected.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <h3>技术与工具</h3>
              <div className="tag-row">
                {selected.tools.map((tool) => <small key={tool}>{tool}</small>)}
              </div>
              {selected.demoUrl && (
                <a className="drawer-demo-link" href={selected.demoUrl}>
                  立即体验 Demo <span>↗</span>
                </a>
              )}
              <button
                className="next-project"
                onClick={() => setSelected(projects[(projects.findIndex((project) => project.id === selected.id) + 1) % projects.length])}
              >
                下一个项目 <span>→</span>
              </button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
