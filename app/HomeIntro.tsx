'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

const easeOut = [0.22, 1, 0.36, 1] as const;

function Runner({ reduced, arrived }: { reduced: boolean | null; arrived: boolean }) {
  const still = reduced
    ? { initial: false as const, animate: { x: 0 } }
    : {
        initial: { x: '-58vw' },
        animate: { x: ['-58vw', '0vw', '0vw'] },
      };

  return (
    <motion.div
      className="intro-runner"
      initial={still.initial}
      animate={still.animate}
      transition={reduced ? { duration: 0 } : { duration: 2.05, times: [0, 0.78, 1], ease: easeOut }}
      aria-label="一个跑进画面并挥手的简笔画人物"
      role="img"
    >
      <svg viewBox="0 0 150 190" aria-hidden="true">
        <motion.g
          className="runner-body"
          animate={reduced ? undefined : arrived ? { y: [0, -2, 0] } : { y: [0, -4, 0, -3, 0] }}
          transition={arrived
            ? { duration: 1.8, repeat: Infinity, repeatDelay: 0.7, ease: 'easeInOut' }
            : { duration: 0.42, repeat: 4, ease: 'easeInOut' }}
        >
          <circle className="runner-head" cx="76" cy="43" r="28" />
          <circle className="runner-cheek" cx="57" cy="47" r="4" />
          <circle className="runner-cheek" cx="95" cy="47" r="4" />
          <path d="M68 52 Q76 59 84 52" />
          <path d="M75 71 C72 92 74 111 78 132" />
          <motion.path
            d="M74 83 Q48 96 36 115"
            animate={reduced ? undefined : arrived ? { rotate: 0 } : { rotate: [18, -20, 18, -20, 18, 0] }}
            transition={{ duration: arrived ? 0.2 : 2.05, ease: easeOut }}
            style={{ transformOrigin: '74px 83px' }}
          />
          <motion.path
            d="M76 83 Q101 96 113 116"
            animate={reduced ? undefined : arrived
              ? { rotate: [-42, -62, -34, -58, -42] }
              : { rotate: [-16, 18, -16, 18, -16, -42] }}
            transition={arrived
              ? { duration: 0.72, repeat: Infinity, repeatDelay: 1.65, ease: 'easeInOut' }
              : { duration: 2.05, ease: easeOut }}
            style={{ transformOrigin: '76px 83px' }}
          />
          <motion.path
            d="M78 131 Q58 150 53 177"
            animate={reduced ? undefined : arrived ? { rotate: 0 } : { rotate: [-18, 16, -18, 16, -18, 0] }}
            transition={{ duration: arrived ? 0.2 : 2.05, ease: easeOut }}
            style={{ transformOrigin: '78px 131px' }}
          />
          <motion.path
            d="M78 131 Q99 150 103 177"
            animate={reduced ? undefined : arrived ? { rotate: 0 } : { rotate: [18, -16, 18, -16, 18, 0] }}
            transition={{ duration: arrived ? 0.2 : 2.05, ease: easeOut }}
            style={{ transformOrigin: '78px 131px' }}
          />
        </motion.g>
      </svg>
      <motion.div
        className="motion-streaks"
        initial={reduced ? false : { opacity: 1 }}
        animate={{ opacity: reduced ? 0 : [1, 0.35, 1, 0] }}
        transition={{ duration: 1.65, ease: 'easeOut' }}
        aria-hidden="true"
      ><i /><i /><i /></motion.div>
    </motion.div>
  );
}

function IntroScene() {
  const reduced = useReducedMotion();
  const [arrived, setArrived] = useState(false);
  const reveal = reduced ? 0 : 1.85;

  useEffect(() => {
    if (reduced) {
      return;
    }
    const timer = window.setTimeout(() => setArrived(true), 2050);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <section className="intro-scene" id="top" aria-labelledby="intro-title">
      <div className="intro-doodle intro-star" aria-hidden="true">✦</div>
      <div className="intro-doodle intro-star-two" aria-hidden="true">✧</div>
      <div className="intro-doodle intro-star-three" aria-hidden="true">✦</div>
      <div className="intro-doodle intro-cloud" aria-hidden="true" />
      <div className="intro-sprout intro-sprout-left" aria-hidden="true"><i /><i /><i /></div>
      <div className="intro-sprout intro-sprout-right" aria-hidden="true"><i /><i /><i /></div>
      <div className="intro-stage">
        <Runner reduced={reduced} arrived={arrived || Boolean(reduced)} />
        <motion.svg
          className="intro-ground"
          viewBox="0 0 760 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M5 24 C120 10 205 33 320 21 S545 10 755 24"
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 1.25, ease: easeOut }}
          />
        </motion.svg>

        <div className="intro-speech-positioner">
          <motion.div
            className="intro-bubble"
            initial={reduced ? false : { opacity: 0, scale: 0.45, rotate: -7 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ delay: reveal, duration: reduced ? 0 : 0.48, type: 'spring', bounce: 0.42 }}
          >
            <p>你好，欢迎！</p>
            <span>Hi, welcome to my little corner</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="intro-content"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduced ? 0 : 2.15, duration: reduced ? 0 : 0.5, ease: easeOut }}
      >
        <h1 id="intro-title">Zoe Zhang</h1>
        <nav aria-label="主页快捷入口">
          <a href="#projects">项目</a>
          <a href="#ai-videos">AI 视频</a>
          <a href="#notes">笔记</a>
          <a href="https://github.com/rheeh" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a className="intro-scroll" href="#projects">往下看看 ↓</a>
      </motion.div>
    </section>
  );
}

export default function HomeIntro() {
  const [run, setRun] = useState(0);
  return (
    <div className="intro-wrap">
      <IntroScene key={run} />
      <button className="intro-replay" type="button" onClick={() => setRun((value) => value + 1)}>
        ↺ replay intro
      </button>
    </div>
  );
}
