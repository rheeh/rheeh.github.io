'use client';
import { useEffect, useRef, type ReactNode } from 'react';

// Follow normal scrolling; no navigation UI or intercepted wheel events.
export default function ScrollMood({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const sections = ['top', 'projects', 'notes'].map((id) => page.querySelector<HTMLElement>(`#${id}`)).filter((el): el is HTMLElement => Boolean(el));
    let frame = 0;
    let last = '';
    const update = () => {
      frame = 0;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.45) current = section;
      }
      if (!current || current.id === last) return;
      last = current.id;
      page.dataset.scene = current.id;
      for (const section of sections) section.dataset.active = String(section === current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('pageshow', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pageshow', schedule);
    };
  }, []);
  return <div ref={root} className="personal-home" data-scene="top">{children}</div>;
}
