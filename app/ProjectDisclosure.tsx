'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export default function ProjectDisclosure({ id, title, type, index, children }: {
  id: string; title: string; type: string; index: number; children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const anchor = `project-${id}`;

  useEffect(() => {
    let frame = 0;
    const followLink = () => {
      if (window.location.hash !== `#${anchor}`) return;
      frame = requestAnimationFrame(() => {
        setOpen(true);
        root.current?.scrollIntoView({ block: 'start' });
      });
    };
    followLink();
    window.addEventListener('hashchange', followLink);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('hashchange', followLink); };
  }, [anchor]);

  return (
    <article ref={root} id={anchor} className={`project-disclosure${open ? ' is-open' : ''}`}>
      <h3>
        <button id={`${anchor}-trigger`} className="project-trigger" aria-expanded={open} aria-controls={`${anchor}-panel`} onClick={() => setOpen(value => !value)}>
          <span className="disclosure-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-name">{title}<small>{type}</small></span>
          <span className="project-toggle" aria-hidden="true"><i /><i /></span>
        </button>
      </h3>
      <div className="project-panel" id={`${anchor}-panel`} role="region" aria-labelledby={`${anchor}-trigger`} aria-hidden={!open} inert={!open}>
        <div className="project-panel-clip"><div className="project-panel-content">{children}</div></div>
      </div>
    </article>
  );
}
