/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import type { Metadata } from 'next';
import { analysisShowcases, reports } from '../../src/data/reports';

export const metadata: Metadata = {
  title: '观察与体验 | Z.',
  description: '关于产品、平台、商业模式与游戏系统的观察与体验。',
};

export default function ReportsPage() {
  const total = reports.length + analysisShowcases.length;

  return (
    <>
      <a className="skip-link" href="#reports-main">Skip to content</a>
      <header className="report-nav-shell">
        <nav className="report-nav container" aria-label="笔记导航">
          <a className="report-brand" href="/"><b>Z.</b><span>Z. / 观察与体验</span></a>
          <div><a href="/">主页</a><a href="/#projects">项目</a><a href="mailto:grunt1948@163.com">联系</a></div>
        </nav>
      </header>

      <main className="reports-index" id="reports-main">
        <header className="reports-index-hero container">
          <div>
            <p className="eyebrow">NOTES</p>
            <h1>观察与<br />体验。</h1>
          </div>
          <div>
            <p>关于工具、游戏和消费的一些问题。把看到的现象记下来，也给还没想清楚的地方留点余地。</p>
            <span>{total} NOTES / ARTICLES &amp; INTERACTIVE PAGES</span>
          </div>
        </header>

        <section className="report-collection container" aria-labelledby="articles-heading">
          <header className="collection-heading">
            <span>01 / ARTICLES</span>
            <h2 id="articles-heading">从一个小问题说起</h2>
            <p>收藏、游戏、内容表达，还有日常里的小物件。</p>
          </header>
          <div className="reports-grid">
            {reports.map((report) => (
              <article className={`report-index-card index-${report.accent}`} key={report.slug}>
                <a href={`/reports/${report.slug}/`} aria-label={`阅读笔记：${report.title}`}>
                  <div className={`report-index-art images-${report.heroImages.length}`}>
                    {report.heroImages.slice(0, 2).map((image) => (
                      <img src={image.src} alt="" width="1200" height="630" loading="lazy" key={image.src} />
                    ))}
                    {report.coverLabel ? <strong className="note-cover-label">{report.coverLabel}</strong> : null}
                    <span>{report.number}</span>
                  </div>
                  <div className="report-index-copy">
                    <div><span>{report.category}</span><span>{report.readTime}</span></div>
                    <h2>{report.title}</h2>
                    <p>{report.summary}</p>
                    <ul aria-label="话题">{report.capabilityTags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <b>读这篇笔记 <span>↗</span></b>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="interactive-collection" aria-labelledby="interactive-heading">
          <div className="container">
            <header className="collection-heading collection-heading-dark">
              <span>02 / INTERACTIVE NOTES</span>
              <h2 id="interactive-heading">带着图表继续看</h2>
              <p>视频工具和 MOBA：每篇关注一个不同的侧面。</p>
            </header>
            <div className="showcase-grid">
              {analysisShowcases.map((item) => (
                <article className={`showcase-card showcase-${item.accent}`} key={item.slug}>
                  <a href={item.href}>
                    <div className="showcase-card-head"><span>{item.number}</span><i>{item.format}</i></div>
                    <p className="showcase-category">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <ul>{item.capabilityTags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <b>打开笔记 <span>↗</span></b>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="report-footer container"><span>Z. / 观察与体验</span><a href="/">返回主页 ↗</a></footer>
    </>
  );
}
