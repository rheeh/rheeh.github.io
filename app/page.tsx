'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { profile, projects, research, type Project } from '../src/data/profile';
import { reports } from '../src/data/reports';

const projectMarks: Record<string, string> = {
  dragonpass: 'DP',
  'knowledge-world': 'KW',
  'drink-diy': 'DIY',
  geneembedllm: 'GE',
};

const principles = [
  {
    number: '01',
    title: '证据先于形容词',
    body: '公开事实、分析推断和方案建议分开写。数据回答“发生了什么”，方案才回答“下一步做什么”。',
  },
  {
    number: '02',
    title: '把功能放回完整链路',
    body: '不孤立评价一个页面或 AI 能力，而是追踪用户从触发、决策、行动到反馈的整个过程。',
  },
  {
    number: '03',
    title: '用实验结束争论',
    body: '每个判断尽量落到一个可运行的原型、一项主指标和几条明确护栏，而不是停在观点表达。',
  },
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
            <span>{profile.shortName}</span>
            <span className="brand-copy">
              <b>PRODUCT NOTES</b>
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
            {[
              ['项目', 'BUILD', 'work'],
              ['分析', 'THINK', 'insights'],
              ['方法', 'METHOD', 'method'],
              ['研究', 'RESEARCH', 'research'],
            ].map(([label, english, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                <span>{label}</span>
                <small>{english}</small>
              </a>
            ))}
          </div>
          <a className="nav-action" href="#contact">Say hello</a>
        </nav>
      </header>

      <main id="main">
        <section className="builder-hero container" id="top">
          <div className="builder-hero-main">
            <p className="eyebrow">INDEPENDENT PRODUCT WORKSPACE / 2026</p>
            <h1 aria-label="Z dot">Z.</h1>
            <p className="builder-role">PRODUCT / AI / SYSTEMS</p>
            <p className="builder-intro">
              做产品，也写拆解。这里存放正在构建的产品、公开的分析笔记，以及我对内容、AI 与游戏系统的具体判断。
            </p>
            <div className="builder-actions" aria-label="主要入口">
              <a href="#work">查看项目 <span>↘</span></a>
              <a href="#insights">阅读分析 <span>↘</span></a>
            </div>
          </div>

          <figure className="system-board" aria-label="当前工作台状态">
            <div className="system-board-head">
              <span>WORKSPACE / LIVE</span>
              <i>2026.08</i>
            </div>
            <div className="system-orbit" aria-hidden="true">
              <span className="orbit orbit-a" />
              <span className="orbit orbit-b" />
              <span className="orbit-core">Z</span>
              <i className="node node-a" />
              <i className="node node-b" />
              <i className="node node-c" />
            </div>
            <div className="system-stats">
              <div><span>BUILD</span><strong>{projects.length.toString().padStart(2, '0')}</strong></div>
              <div><span>NOTES</span><strong>{reports.length.toString().padStart(2, '0')}</strong></div>
              <div><span>FOCUS</span><strong>AI</strong></div>
            </div>
            <figcaption>产品、证据和实验保持在同一条公开轨道上。</figcaption>
          </figure>

          <a className="builder-scroll" href="#work">SCROLL TO EXPLORE <span>↓</span></a>
        </section>

        <section className="build-section container" id="work">
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">BUILD / SELECTED WORK</p>
              <h2>构建中</h2>
            </div>
            <p>从真实业务、个人原型到研究工具。点击项目，查看问题、行动和验证方式。</p>
          </div>

          <div className="build-list">
            {projects.map((project, index) => (
              <motion.button
                className={`build-row ${index === 0 ? 'build-featured' : ''}`}
                key={project.id}
                onClick={() => setSelected(project)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.995 }}
              >
                <span className="build-number">{project.number}</span>
                <span className="build-title">
                  <strong>{project.title}</strong>
                  <em>{project.type}</em>
                </span>
                <span className="build-summary">{project.summary}</span>
                <span className="build-mark" aria-hidden="true">{projectMarks[project.id]}</span>
                <span className="build-arrow" aria-hidden="true">↗</span>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="notes-section" id="insights">
          <div className="container">
            <div className="editorial-heading notes-heading">
              <div>
                <p className="eyebrow">THINK / PRODUCT NOTES</p>
                <h2>公开思考</h2>
              </div>
              <p>每篇只回答一个具体问题：先列证据，再形成判断，最后给出可以验证的动作。</p>
            </div>

            <div className="notes-list">
              {reports.map((report) => (
                <a className="note-row" href={`/reports/${report.slug}`} key={report.slug}>
                  <span className="note-number">{report.number}</span>
                  <span className="note-meta">
                    <small>{report.category}</small>
                    <i>{report.readTime}</i>
                  </span>
                  <span className="note-copy">
                    <strong>{report.title}</strong>
                    <p>{report.summary}</p>
                  </span>
                  <span className="note-tags">
                    {report.capabilityTags.slice(0, 3).map((tag) => <small key={tag}>{tag}</small>)}
                  </span>
                  <span className="note-arrow">↗</span>
                </a>
              ))}
            </div>
            <div className="notes-all"><a href="/reports">全部分析文档 <span>→</span></a></div>
          </div>
        </section>

        <section className="method-section container" id="method">
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">METHOD / OPERATING PRINCIPLES</p>
              <h2>怎么判断</h2>
            </div>
            <p>比“我是谁”更重要的是：面对一个模糊问题时，我如何减少猜测并推动它向前。</p>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="research-signal container" id="research">
          <div>
            <p className="eyebrow">RESEARCH / CURRENT SIGNAL</p>
            <h2>{research.title}</h2>
          </div>
          <p>{research.description}</p>
          <div className="research-status">
            <span>STATUS</span>
            <strong>ONGOING</strong>
            <small>{research.concepts.join(' · ')}</small>
          </div>
        </section>

        <section className="builder-contact container" id="contact">
          <p className="eyebrow">CONTACT / OPEN CHANNEL</p>
          <h2>一起把问题<br />做成产品。</h2>
          <p>如果你也在做 AI、内容或游戏产品，欢迎带着一个具体问题来聊。</p>
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email} <span>↗</span></a>
          <div className="contact-ticker" aria-hidden="true">
            PRODUCT NOTES · BUILD IN PUBLIC · EVIDENCE BEFORE ADJECTIVES ·
          </div>
        </section>
      </main>

      <footer className="builder-footer container">
        <span>Z. / PRODUCT NOTES</span>
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
                <b>{projectMarks[selected.id]}</b>
              </div>
              <p className="eyebrow">{selected.type}</p>
              <h2 id="project-title">{selected.title}</h2>
              <p className="drawer-overview">{selected.overview}</p>
              <h3>What I did</h3>
              <ul>
                {selected.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <h3>Technology / Tools</h3>
              <div className="tag-row">
                {selected.tools.map((tool) => <small key={tool}>{tool}</small>)}
              </div>
              <button
                className="next-project"
                onClick={() => setSelected(projects[(projects.findIndex((project) => project.id === selected.id) + 1) % projects.length])}
              >
                Next project <span>→</span>
              </button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
