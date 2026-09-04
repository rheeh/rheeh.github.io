/* eslint-disable @next/next/no-img-element */

import { profile, projects } from '../src/data/profile';
import { analysisShowcases, reports } from '../src/data/reports';
import HomeIntro from './HomeIntro';

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [featuredProject, ...otherProjects] = projects;
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
            <a href="#auralis">Auralis</a>
            <a href="#projects">项目</a>
            <a href="#ai-videos">AI 视频</a>
            <a href="#notes">笔记</a>
            <a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </nav>
      </header>

      <main id="main">
        <HomeIntro />

        <section className="featured-project home-shell" id="auralis" aria-labelledby="featured-title">
          <p className="featured-kicker">FEATURED PROJECT / AI AUDIO WORKFLOW</p>
          <div className="featured-heading">
            <h2 id="featured-title">{featuredProject.title}</h2>
            <span aria-hidden="true">01</span>
          </div>
          <a className="featured-image" href={featuredProject.links[0].href} target="_blank" rel="noreferrer" aria-label="打开 Auralis 在线体验">
            <img
              src="/project-assets/auralis-home.jpg"
              alt="Auralis AI 广播剧创作产品首页"
              width="1600"
              height="918"
              loading="lazy"
            />
          </a>
          <div className="featured-details">
            <p className="featured-type">{featuredProject.type}</p>
            <p className="featured-summary">{featuredProject.summary}</p>
            <ul>{featuredProject.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="featured-links">
              {featuredProject.links.map((link) => (
                <a className={link.kind === 'demo' ? 'featured-demo' : ''} href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                  {link.label} <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-shell" id="projects">
          <header className="home-section-head">
            <h2>做过的项目</h2>
          </header>

          <div className="project-list">
            {otherProjects.map((project, index) => (
              <article className="project-row" key={project.id}>
                <span className="project-index">0{index + 2}</span>
                <div className="project-row-title">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-row-detail">
                  <p>{project.summary}</p>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </div>
                <div className="project-row-links">
                  {project.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label} <Arrow />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section video-section" id="ai-videos">
          <div className="home-shell">
            <header className="home-section-head video-heading">
              <div><p>PERSONAL AI FILMS</p><h2>AI 生成视频</h2></div>
              <span>目录整理中</span>
            </header>
            <div className="video-shelf" aria-label="AI 生成视频目录，内容待添加">
              <div><span>01</span><i /></div>
              <div><span>02</span><i /></div>
              <div><span>03</span><i /></div>
            </div>
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
