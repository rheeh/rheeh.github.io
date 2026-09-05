/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import type { CSSProperties, ReactNode } from 'react';
import type { Report, ReportBlock, ReportSource } from '../../src/data/reports';

function CitationLinks({ ids, sources }: { ids?: string[]; sources: ReportSource[] }) {
  if (!ids?.length) return null;
  return (
    <span className="inline-citations" aria-label="本段来源">
      来源{' '}
      {ids.map((id) => {
        const source = sources.find((item) => item.id === id);
        if (!source) return null;
        return (
          <a key={id} href={`#source-${id}`} aria-label={`查看来源：${source.title}`}>
            {String(sources.findIndex((item) => item.id === id) + 1).padStart(2, '0')}
          </a>
        );
      })}
    </span>
  );
}

function BlockFrame({
  children,
  citations,
  sources,
  className = '',
}: {
  children: ReactNode;
  citations?: string[];
  sources: ReportSource[];
  className?: string;
}) {
  return (
    <div className={`report-block ${className}`}>
      {children}
      <CitationLinks ids={citations} sources={sources} />
    </div>
  );
}

function ReportBlockView({ block, sources }: { block: ReportBlock; sources: ReportSource[] }) {
  switch (block.type) {
    case 'text':
      return (
        <BlockFrame citations={block.citations} sources={sources} className="report-copy">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </BlockFrame>
      );
    case 'callout':
      return (
        <BlockFrame
          citations={block.citations}
          sources={sources}
          className={`report-callout tone-${block.tone ?? 'lavender'}`}
        >
          <span>{block.label}</span>
          <h3>{block.title}</h3>
          <p>{block.body}</p>
        </BlockFrame>
      );
    case 'metrics':
      return (
        <BlockFrame citations={block.citations} sources={sources} className="metric-grid">
          {block.items.map((item) => (
            <div className="metric-card" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </div>
          ))}
        </BlockFrame>
      );
    case 'compare':
      return (
        <BlockFrame citations={block.citations} sources={sources} className="table-block">
          <div className="table-scroll" tabIndex={0} aria-label={`${block.caption}，可横向滚动`}>
            <table>
              <caption>{block.caption}</caption>
              <thead>
                <tr>
                  {block.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={`${row[0]}-${rowIndex}`}>
                    {row.map((cell, cellIndex) =>
                      cellIndex === 0 ? (
                        <th key={`${cell}-${cellIndex}`} scope="row">
                          {cell}
                        </th>
                      ) : (
                        <td key={`${cell}-${cellIndex}`}>{cell}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BlockFrame>
      );
    case 'flow':
      return (
        <BlockFrame citations={block.citations} sources={sources} className="flow-stack">
          {block.tracks.map((track) => (
            <div className={`flow-track flow-${track.tone}`} key={track.label}>
              <h3>{track.label}</h3>
              <div className="flow-steps">
                {track.steps.map((step, index) => (
                  <div className="flow-step" key={step.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{step.title}</strong>
                    <p>{step.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </BlockFrame>
      );
    case 'cards':
      return (
        <BlockFrame
          citations={block.citations}
          sources={sources}
          className={`analysis-cards cards-${block.columns ?? 3}`}
        >
          {block.items.map((item) => (
            <article key={`${item.label}-${item.title}`}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.meta && <small>{item.meta}</small>}
            </article>
          ))}
        </BlockFrame>
      );
    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul';
      return (
        <BlockFrame citations={block.citations} sources={sources} className="report-list">
          <ListTag>
            {block.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ListTag>
        </BlockFrame>
      );
    }
    case 'bars':
      return (
        <BlockFrame citations={block.citations} sources={sources} className="bar-chart">
          <h3>{block.caption}</h3>
          <p>{block.note}</p>
          <div className="bar-list" role="img" aria-label={`${block.caption}。${block.note}`}>
            {block.items.map((item) => (
              <div className="bar-row" key={item.label}>
                <span>{item.label}</span>
                <i style={{ '--bar-value': `${item.value}%` } as CSSProperties} />
                <strong>{item.display}</strong>
              </div>
            ))}
          </div>
        </BlockFrame>
      );
    case 'proposal':
      return (
        <BlockFrame citations={block.citations} sources={sources} className="proposal-card">
          <span>方案 / EXPERIMENT</span>
          <h3>{block.name}</h3>
          <div className="proposal-lead">
            <div>
              <small>目标</small>
              <p>{block.objective}</p>
            </div>
            <div>
              <small>核心假设</small>
              <p>{block.hypothesis}</p>
            </div>
          </div>
          <ol>
            {block.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="proposal-metrics">
            <div>
              <small>主指标</small>
              <strong>{block.primaryMetric}</strong>
            </div>
            <div>
              <small>护栏</small>
              <p>{block.guardrails.join(' / ')}</p>
            </div>
          </div>
        </BlockFrame>
      );
  }
}

export function ReportArticle({ report }: { report: Report }) {
  return (
    <>
      <a className="skip-link" href="#report-main">
        Skip to content
      </a>
      <header className="report-nav-shell">
        <nav className="report-nav container" aria-label="笔记导航">
          <a className="report-brand" href="/">
            <b>Z.</b>
            <span>Z. / 观察与体验</span>
          </a>
          <div>
            <a href="/reports">全部笔记</a>
            <a href="/#projects">项目</a>
            <a href="#sources">来源</a>
          </div>
        </nav>
      </header>
      <main id="report-main" className={`report-page report-accent-${report.accent}`}>
        <article>
          <header className="report-hero container">
            <div className="report-kicker">
              <span>{report.number}</span>
              <span>{report.category}</span>
            </div>
            <h1>{report.title}</h1>
            <p className="report-summary">{report.summary}</p>
            <div className="report-hero-meta">
              <span>{report.readTime}</span>
              <span>{report.capabilityTags.join(' / ')}</span>
            </div>
            {report.heroImages.length > 0 && <div className={`report-visual-grid images-${report.heroImages.length}`}>
              {report.heroImages.map((image) => {
                const source = report.sources.find((item) => item.id === image.sourceId);
                return (
                  <figure key={image.src} className={image.caption ? "note-overview" : undefined}>
                    <img src={image.src} alt={image.alt} width="1200" height="630" />
                    {image.caption && <figcaption>{image.caption}</figcaption>}
                    {source && (
                      <figcaption>
                        图片来源：
                        <a href={source.url} target="_blank" rel="noreferrer">
                          {source.publisher}
                        </a>
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>}
            {report.question && <div className="report-question">
              <span>KEY QUESTION</span>
              <p>{report.question}</p>
            </div>}
          </header>

          <div className="report-body container">
            <aside className="report-toc" aria-label="笔记目录">
              <span>CONTENTS</span>
              {report.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  <b>{section.number}</b>
                  {section.title}
                </a>
              ))}
            </aside>
            <div className="report-sections">
              {report.sections.map((section) => (
                <section className="report-section" id={section.id} key={section.id}>
                  <div className="report-section-heading">
                    <span>{section.number}</span>
                    <div>
                      <small>{section.evidence}</small>
                      <h2>{section.title}</h2>
                      {section.intro && <p>{section.intro}</p>}
                    </div>
                  </div>
                  <div className="report-section-blocks">
                    {section.blocks.map((block, index) => (
                      <ReportBlockView block={block} sources={report.sources} key={`${block.type}-${index}`} />
                    ))}
                  </div>
                </section>
              ))}

              <section className="report-conclusion">
                <span>CONCLUSION</span>
                <h2>留待继续观察</h2>
                <p>{report.conclusion}</p>
              </section>

              <section className="report-sources" id="sources">
                <div className="report-section-heading">
                  <span>R</span>
                  <div>
                    <small>SOURCES &amp; LIMITATIONS</small>
                    <h2>来源与限制</h2>
                    <p>
                      第三方调研口径可能随时间、样本与统计方法变化；文中不将公开资料解释为平台内部完整数据或因果证明。
                    </p>
                  </div>
                </div>
                <ol>
                  {report.sources.map((source, index) => (
                    <li id={`source-${source.id}`} key={source.id}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <a href={source.url} target="_blank" rel="noreferrer">
                          {source.title} <i>↗</i>
                        </a>
                        <p>{source.publisher}</p>
                        {source.note && <small>{source.note}</small>}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </article>
      </main>
      <footer className="report-footer container">
        <span>Z. / 观察与体验</span>
        <a href="/reports">返回笔记目录 ↗</a>
      </footer>
    </>
  );
}
