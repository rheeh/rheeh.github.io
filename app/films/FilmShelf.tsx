'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { films } from '../../src/data/profile';

export default function FilmShelf() {
  const [selected, setSelected] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const trigger = useRef<HTMLAnchorElement | null>(null);
  const film = films.find(item => item.id === selected);

  useEffect(() => {
    const followHash = () => {
      const id = window.location.hash.slice(1);
      if (films.some(item => item.id === id)) { setFailed(false); setSelected(id); }
    };
    followHash();
    window.addEventListener('hashchange', followHash);
    return () => window.removeEventListener('hashchange', followHash);
  }, []);

  useEffect(() => {
    if (!film) return;
    const el = dialog.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (el && !el.open) el.showModal();
    return () => { document.body.style.overflow = overflow; };
  }, [film]);

  function closeFilm() {
    video.current?.pause();
    dialog.current?.close();
    setSelected(null);
    setFailed(false);
    if (films.some(item => `#${item.id}` === window.location.hash)) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    trigger.current?.focus();
  }

  return (
    <>
      <div className="film-list">
        {films.map((item, index) => (
          <article className={`film-entry${index < 2 ? ' film-featured' : ''}`} key={item.id}>
            <a className="film-open" href={item.src} aria-label={`播放《${item.title}》，${item.duration}`} onClick={event => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault(); trigger.current = event.currentTarget; setFailed(false); setSelected(item.id);
            }}>
              <div className={`film-poster${item.orientation === 'portrait' ? ' is-portrait' : ''}`}>
                <img src={item.poster} alt={item.posterAlt} width="640" height="400" loading={index < 2 ? 'eager' : 'lazy'} />
                <span className="film-duration">{item.duration}</span>
              </div>
              <div className="film-copy"><p className="film-kind"><span>{String(index + 1).padStart(2, '0')}</span>{item.kind}</p><h2>{item.title}</h2><p className="film-description">{item.description}</p><span className="film-format">{item.orientation === 'portrait' ? '竖屏' : '横屏'} · {item.note}</span></div>
              <span className="film-play" aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      {film && (
        <dialog ref={dialog} className="film-dialog" aria-labelledby="playing-title" onCancel={event => { event.preventDefault(); closeFilm(); }} onClose={closeFilm} onClick={event => { if (event.target === event.currentTarget) closeFilm(); }}>
          <div className="film-player-shell">
            <header><div><p>{film.kind} · {film.duration}</p><h2 id="playing-title">{film.title}</h2></div><button type="button" onClick={closeFilm} autoFocus aria-label="关闭影片">关闭 <span aria-hidden="true">×</span></button></header>
            <video ref={video} key={film.id} className={film.orientation} src={film.src} poster={film.poster} controls playsInline autoPlay preload="metadata" onError={() => setFailed(true)} aria-label={`《${film.title}》视频`} />
            {failed && <p role="alert" className="film-playback-error">视频暂时没有载入成功。<a href={film.src}>直接打开视频 ↗</a></p>}
            <p className="film-player-caption">{film.description}</p>
          </div>
        </dialog>
      )}
    </>
  );
}
