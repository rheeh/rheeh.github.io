/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
import DoodleReveal from '../../DoodleReveal';
import type { Metadata } from 'next';
import { graduateDay } from '../../../src/data/profile';

export const metadata: Metadata = {
  title: `${graduateDay.title} · AI 插画 | Zoe Zhang`,
  description: graduateDay.description,
};

export default function GraduateDayPage() {
  return (
    <div className="illustration-page">
      <a className="skip-link" href="#gallery-main">跳到作品</a>
      <nav className="gallery-nav" aria-label="插画导航">
        <a href="/#notes">← 返回主页</a><span>Zoe Zhang / AI 创作</span>
      </nav>
      <main id="gallery-main" className="gallery-main">
        <header className="gallery-heading">
          <p>{graduateDay.category}</p>
          <h1>{graduateDay.title}</h1>
          <div>{graduateDay.description}</div>
          <small>{graduateDay.styleNote} · 点击图片查看原图</small>
        <a className="story-start" href="#drawing-01">往下翻，开始这一天 <span aria-hidden="true">↓</span></a>
        </header>
        <div className="graduate-gallery">
          {graduateDay.images.map((item, index) => (
            <figure key={item.id} id={`drawing-${item.id}`}>
              <a href={`/illustrations/graduate-day/${item.id}.png`} target="_blank" rel="noreferrer" aria-label={`查看原图：${item.title}（新窗口）`}>
                <img src={`/illustrations/graduate-day/${item.id}.png`} alt={item.alt} width="624" height="1088" loading={index < 2 ? 'eager' : 'lazy'} />
              </a>
              <figcaption><DoodleReveal className="story-caption"><span>{item.id} / 05</span><h2>{item.title}</h2><p>{item.caption}</p></DoodleReveal></figcaption>
            </figure>
          ))}
        </div>
        <DoodleReveal className="story-ending">
          <p>{graduateDay.ending.line}</p>
          <details>
            <summary>{graduateDay.ending.prompt}<span aria-hidden="true">＋</span></summary>
            <p>{graduateDay.ending.reply}</p>
          </details>
          <a href="#gallery-main">↑ 再翻一遍</a>
        </DoodleReveal>
      </main>
      <footer className="gallery-nav"><a href="/#notes">← 回到作品列表</a><span>5 / 5</span></footer>
    </div>
  );
}
