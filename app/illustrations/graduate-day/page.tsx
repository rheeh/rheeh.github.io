/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
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
        <a href="/#ai-creations">← 返回主页</a><span>Zoe Zhang / AI 创作</span>
      </nav>
      <main id="gallery-main" className="gallery-main">
        <header className="gallery-heading">
          <p>{graduateDay.category}</p>
          <h1>{graduateDay.title}</h1>
          <div>{graduateDay.description}</div>
          <small>{graduateDay.styleNote} · 点击图片查看原图</small>
        </header>
        <div className="graduate-gallery">
          {graduateDay.images.map((item, index) => (
            <figure key={item.id} id={`drawing-${item.id}`}>
              <a href={`/illustrations/graduate-day/${item.id}.png`} target="_blank" rel="noreferrer" aria-label={`查看原图：${item.title}（新窗口）`}>
                <img src={`/illustrations/graduate-day/${item.id}.png`} alt={item.alt} width="624" height="1088" loading={index < 2 ? 'eager' : 'lazy'} />
              </a>
              <figcaption><span>{item.id}</span><div><h2>{item.title}</h2><p>{item.caption}</p></div></figcaption>
            </figure>
          ))}
        </div>
      </main>
      <footer className="gallery-nav"><a href="/#ai-creations">← 回到作品列表</a><span>5 / 5</span></footer>
    </div>
  );
}
