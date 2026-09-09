/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import { filmCollection, films } from '../../src/data/profile';
import FilmShelf from './FilmShelf';
import './films.css';

export const metadata: Metadata = {
  title: '脑内放映室 · AI 影像 | Zoe Zhang',
  description: filmCollection.description,
};

export default function FilmsPage() {
  return (
    <div className="films-page">
      <a className="skip-link" href="#films-main">跳到影片</a>
      <nav className="films-nav" aria-label="放映室导航">
        <a href="/#screening-room">← 回到主页</a><span>Zoe Zhang / AI 创作</span>
      </nav>
      <main id="films-main" className="films-main">
        <header className="films-heading">
          <div><p className="films-eyebrow">短片与镜头练习</p><h1>脑内<span>放映室</span></h1><p className="films-intro">{filmCollection.description}</p></div>
          <div className="films-ticket" aria-hidden="true"><span>随时开场</span><strong>{String(films.length).padStart(2, '0')}</strong><small>部短片</small></div>
        </header>
        <FilmShelf />
        <footer className="films-footer"><span>这次散场，下次再见。</span><a href="/#notes">回去翻翻笔记 ↗</a></footer>
      </main>
    </div>
  );
}
