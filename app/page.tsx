/* eslint-disable @next/next/no-img-element */
import { profile, projects, creativeWorks } from '../src/data/profile';
import { analysisShowcases, reports } from '../src/data/reports';
import DoodleReveal from './DoodleReveal';
import HomeIntro from './HomeIntro';
import RunningDivider from './RunningDivider';
import ProjectDisclosure from './ProjectDisclosure';

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <DoodleReveal>
      <header className="doodle-section-heading">
        <span><i aria-hidden="true">✦</i>{kicker}</span>
        <h2>{title}</h2>
      </header>
    </DoodleReveal>
  );
}

export default function Home() {
  const notes = [
    ...creativeWorks.map((work) => ({
      title: work.title,
      category: 'AI 创作',
      summary: work.summary,
      href: work.href,
    })),
    ...reports.map((report) => ({
      title: report.shortTitle,
      category: report.category,
      summary: report.summary,
      href: `/reports/${report.slug}/`,
    })),
    ...analysisShowcases.map((note) => ({
      title: note.title,
      category: note.category,
      summary: note.summary,
      href: note.href,
    })),
  ];

  return (
    <div className="personal-home">
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main">
        <HomeIntro />
        <RunningDivider />

        <section className="doodle-section" id="projects">
          <SectionHeading kicker="做过，也在继续做" title="我的项目" />
          <div className="project-list">
            {projects.map((project, index) => (
              <DoodleReveal key={project.id} delay={index * 90}>
                <ProjectDisclosure id={project.id} title={project.title} type={project.type} index={index}>
                  <div className="doodle-card-summary">{project.summary}</div>
                  {project.framework && (
                    <div className="project-framework">
                      <figure>
                        <a href={project.framework.src} target="_blank" rel="noreferrer" aria-label={`${project.title} 论文框架图，查看原图（新窗口）`}>
                          <img src={project.framework.src} alt={project.framework.alt} width="1672" height="941" loading="lazy" />
                          <span>查看大图 ↗</span>
                        </a>
                        <figcaption>{project.framework.caption}</figcaption>
                      </figure>
                      <dl>
                        {project.framework.steps.map((step) => (
                          <div key={step.title}><dt>{step.title}</dt><dd>{step.description}</dd></div>
                        ))}
                      </dl>
                      <p className="framework-applications">{project.framework.applications}</p>
                    </div>
                  )}
                  <ul className="project-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <div className="doodle-project-links">
                    {project.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <Arrow /></a>
                    ))}
                  </div>
                </ProjectDisclosure>
              </DoodleReveal>
            ))}
          </div>
        </section>

        <RunningDivider />
        <section className="doodle-section doodle-writing" id="notes">
          <span className="section-alias" id="ai-creations" aria-hidden="true" />
          <span className="section-alias" id="illustrations" aria-hidden="true" />
          <span className="section-alias" id="ai-videos" aria-hidden="true" />
          <SectionHeading kicker="随手记" title="一些观察与体验" />
          <div className="doodle-writing-list">
            {notes.map((note, index) => (
              <DoodleReveal key={note.href} delay={(index % 4) * 70}>
                <a className="doodle-article-row" href={note.href}>
                  <span className="article-mark" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <small>{note.category}</small>
                    <h3>{note.title}</h3>
                    <p>{note.summary}</p>
                  </div>
                  <Arrow />
                </a>
              </DoodleReveal>
            ))}
          </div>
          <DoodleReveal className="notes-more">
            <a href="/reports/">查看全部笔记 <Arrow /></a>
          </DoodleReveal>
        </section>

        <footer className="doodle-footer">
          <div />
          <p>慢慢做产品，也慢慢记录。</p>
          <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
        </footer>
      </main>
    </div>
  );
}
