'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';

/** A local scroll cue: the runner crosses the rule as it passes through the viewport. */
export default function RunningDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className={`running-divider${visible && !reduced ? ' is-running' : ''}`} aria-hidden="true">
      <div className="runner-lane">
        <motion.div className="runner-carrier" style={{ x: reduced ? '45%' : x }}>
          <svg className="divider-person" viewBox="0 0 40 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="24" cy="8" r="5" />
            <path d="M23 15 19 28" />
            <g className="runner-arm"><path d="m23 17-9 3-5-5" /></g>
            <g className="runner-arm runner-opposite"><path d="m23 17 6 8 7-3" /></g>
            <g className="runner-leg"><path d="m19 28-7 8-7-2" /></g>
            <g className="runner-leg runner-opposite"><path d="m19 28 8 6 3 9" /></g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
