/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import type { Metadata } from 'next';
import { analysisShowcases, reports } from '../../src/data/reports';

export const metadata: Metadata = {
  title: '调研笔记 | Z.',
  description: '关于产品、平台、商业模式与游戏系统的调研笔记。',
};

export default function ReportsPage() {
  const total = reports.length + analysisShowcases.length;

  return (
    <>
      <a className="skip-link" href="#reports-main">Skip to content</a>
      <header className="report-nav-shell">
        <nav className="report-nav container" aria-label="笔记导航">
          <a className="report-brand" href="/"><b>Z.</b><span>Z. / 调研笔记</span></a>
          <div><a href="/">主页</a><a href="/#projects">项目</a><a href="mailto:grunt1948@163.com">联系</a></div>
        </nav>
      </header>

      <main className="reports-index" id="reports-main">
        <header className="reports-index-hero container">
          <div>
            <p className="eyebrow">NOTES</p>
            <h1>调研<br />笔记。</h1>
          </div>
          <div>
            <p>围绕一个具体问题组织证据、判断与方案。长文适合深入阅读，交互演示适合快速浏览结论。</p>
            <span>{total} NOTES / ARTICLES &amp; INTERACTIVE PAGES</span>
          </div>
        </header>

        <section className="report-collection container" aria-labelledby="articles-heading">
          <header className="collection-heading">
            <span>01 / ARTICLES</span>
            <h2 id="articles-heading">站内长文</h2>
            <p>完整呈现问题定义、证据边界、分析过程和实验方案。</p>
          </header>
          <div className="reports-grid">
            {reports.map((report) => (
              <article className={`report-index-card index-${report.accent}`} key={report.slug}>
                <a href={`/reports/${report.slug}/`} aria-label={`阅读报告：${report.title}`}>
                  <div className={`report-index-art images-${report.heroImages.length}`}>
                    {report.heroImages.slice(0, 2).map((image) => (
                      <img src={image.src} alt="" width="1200" height="630" loading="lazy" key={image.src} />
                    ))}
                    <span>{report.number}</span>
                  </div>
                  <div className="report-index-copy">
                    <div><span>{report.category}</span><span>{report.readTime}</span></div>
                    <h2>{report.title}</h2>
                    <p>{report.summary}</p>
                    <ul aria-label="能力标签">{report.capabilityTags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <b>阅读完整报告 <span>↗</span></b>
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
              <h2 id="interactive-heading">交互笔记</h2>
              <p>用图表、对照和分步叙事压缩阅读成本；点击后进入独立的全屏页面。</p>
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

      <footer className="report-footer container"><span>Z. / 调研笔记</span><a href="/">返回主页 ↗</a></footer>
    </>
  );
}
