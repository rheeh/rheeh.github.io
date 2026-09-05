'use client';
import { useEffect, useState } from 'react';
import { homeSections } from '../src/data/profile';

export default function SectionNav() {
  const [active, setActive] = useState('top');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = 'top';
      for (const item of homeSections) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = item.id;
      }
      setActive(current);
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
  return (
    <nav className="section-dock" aria-label="切换主页板块">
      <div className="section-dock-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>
      {homeSections.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}><span>{item.label}</span><i aria-hidden="true">{item.mark}</i></a>)}
    </nav>
  );
}
