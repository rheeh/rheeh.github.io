/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import type { Metadata } from 'next';
import { reports } from '../../src/data/reports';

export const metadata: Metadata = {
  title: '产品分析报告 | Z. Product Notes',
  description: '平台策略、AI 产品竞品分析与游戏系统拆解作品集。',
};

export default function ReportsPage() {
  return (
    <>
      <a className="skip-link" href="#reports-main">
        Skip to content
      </a>
      <header className="report-nav-shell">
        <nav className="report-nav container" aria-label="报告导航">
          <a className="report-brand" href="/">
            <b>Z.</b>
            <span>Z. / Product Notes</span>
          </a>
          <div>
            <a href="/">主页</a>
            <a href="/#work">项目</a>
            <a href="mailto:grunt1948@163.com">联系</a>
          </div>
        </nav>
      </header>
      <main className="reports-index" id="reports-main">
        <header className="reports-index-hero container">
          <p className="eyebrow">PRODUCT THINKING / 2026</p>
          <h1>产品分析<br />与业务判断。</h1>
          <div>
            <p>
              每篇报告回答一个具体问题，并将公开事实、分析推断与方案建议分开展示。
            </p>
            <span>{reports.length} REPORTS / UPDATED 2026.08.30</span>
          </div>
        </header>
        <section className="reports-grid container" aria-label="报告列表">
          {reports.map((report) => (
            <article className={`report-index-card index-${report.accent}`} key={report.slug}>
              <a href={`/reports/${report.slug}`} aria-label={`阅读报告：${report.title}`}>
                <div className={`report-index-art images-${report.heroImages.length}`}>
                  {report.heroImages.slice(0, 2).map((image) => (
                    <img src={image.src} alt="" width="1200" height="630" loading="lazy" key={image.src} />
                  ))}
                  <span>{report.number}</span>
                </div>
                <div className="report-index-copy">
                  <div>
                    <span>{report.category}</span>
                    <span>{report.readTime}</span>
                  </div>
                  <h2>{report.title}</h2>
                  <p>{report.summary}</p>
                  <ul aria-label="能力标签">
                    {report.capabilityTags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <b>阅读完整报告 <span>↗</span></b>
                </div>
              </a>
            </article>
          ))}
        </section>
        <section className="reports-method container">
          <span>METHOD</span>
          <h2>不只拆页面，也拆判断。</h2>
          <div>
            <p><b>01 / 界定问题</b>先说明业务问题、用户任务和不讨论什么。</p>
            <p><b>02 / 整理证据</b>官方资料优先，第三方数据保留样本与时间边界。</p>
            <p><b>03 / 形成判断</b>从功能对比走向用户分层、核心循环与商业含义。</p>
            <p><b>04 / 设计验证</b>每篇都给出可执行的方案、主指标与护栏。</p>
          </div>
        </section>
      </main>
      <footer className="report-footer container">
        <span>© 2026 Z. / Product Notes</span>
        <a href="mailto:grunt1948@163.com">grunt1948@163.com ↗</a>
      </footer>
    </>
  );
}
