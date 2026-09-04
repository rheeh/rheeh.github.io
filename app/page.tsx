/* eslint-disable @next/next/no-img-element */

import { profile, projects, type Project } from '../src/data/profile';
import { analysisShowcases, reports } from '../src/data/reports';

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'auralis') {
    return (
      <div className="project-preview preview-auralis">
        <img
          src="/project-assets/auralis-workspace.png"
          alt="Auralis 广播剧制作工作台界面"
          width="1200"
          height="751"
        />
      </div>
    );
  }

  if (project.visual === 'stocks') {
    return (
      <div className="project-preview preview-stocks" aria-hidden="true">
        <div className="stock-head"><span>知行指数</span><strong>78</strong></div>
        <div className="stock-chart"><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="stock-foot"><span>趋势</span><b>规则评分</b><span>核验</span></div>
      </div>
    );
  }

  if (project.visual === 'resume') {
    return (
      <div className="project-preview preview-resume" aria-hidden="true">
        <span>选择岗位</span><i>→</i><span>填写经历</span><i>→</i><strong>生成材料</strong>
      </div>
    );
  }

  return (
    <div className="project-preview preview-genes" aria-hidden="true">
      <span>GENE</span>
      <div>{Array.from({ length: 48 }, (_, index) => <i key={index} />)}</div>
      <strong>19K</strong>
    </div>
  );
}

export default function Home() {
  const recentNotes = [
    ...reports.map((report) => ({
      title: report.shortTitle,
      category: '调研笔记',
      summary: report.summary,
      href: `/reports/${report.slug}/`,
    })),
    ...analysisShowcases.slice(0, 3).map((note) => ({
      title: note.title,
      category: '交互笔记',
      summary: note.summary,
      href: note.href,
    })),
  ];

  return (
    <div className="personal-home">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="home-nav">
        <nav className="home-shell" aria-label="主页导航">
          <a className="home-name" href="#top">{profile.name}</a>
          <div>
            <a href="#projects">项目</a>
            <a href="#notes">笔记</a>
            <a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="home-hero home-shell" id="top">
          <div className="home-hero-copy">
            <p className="home-hello">你好，我是 Z.</p>
            <h1>{profile.tagline}</h1>
            <p>{profile.note}</p>
          </div>
          <a className="home-github-note" href={profile.contact.github} target="_blank" rel="noreferrer">
            <span>github.com/rheeh</span>
            <Arrow />
          </a>
        </section>

        <section className="home-section home-shell" id="projects">
          <header className="home-section-head">
            <h2>做过的项目</h2>
            <p>只有可以体验或查看源码的项目。</p>
          </header>

          <div className="project-board">
            {projects.map((project) => (
              <article className={`project-piece piece-${project.visual}`} key={project.id}>
                <ProjectVisual project={project} />
                <div className="project-piece-copy">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span>{project.summary}</span>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a className={link.kind === 'demo' ? 'link-demo' : ''} href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section notes-section" id="notes">
          <div className="home-shell">
            <header className="home-section-head">
              <h2>调研笔记</h2>
              <a href="/reports/">全部笔记 <Arrow /></a>
            </header>
            <div className="home-notes-grid">
              {recentNotes.map((note, index) => (
                <a className={`home-note note-${(index % 4) + 1}`} href={note.href} key={note.href}>
                  <small>{note.category}</small>
                  <h3>{note.title}</h3>
                  <p>{note.summary}</p>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="home-contact home-shell">
          <p>想聊具体项目，可以直接写信。</p>
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email} <Arrow /></a>
        </section>
      </main>

      <footer className="home-footer home-shell"><span>Z.</span><a href="#top">回到顶部 ↑</a></footer>
    </div>
  );
}
