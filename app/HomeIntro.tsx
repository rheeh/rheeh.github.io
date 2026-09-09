'use client';
/* eslint-disable @next/next/no-img-element */

import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { homeIntro, profile } from '../src/data/profile';

export default function HomeIntro() {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 100, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 100, damping: 24 });
  return (
    <section className="portrait-hero" id="top" aria-labelledby="intro-title"
      onPointerMove={event => {
        if (reduced || event.pointerType !== 'mouse') return;
        const box = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - box.left) / box.width - .5) * 20);
        pointerY.set(((event.clientY - box.top) / box.height - .5) * 14);
      }}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      <nav className="portrait-nav" aria-label="主页快捷入口">
        <a className="portrait-brand" href="#top"><img src="/cat-icon.svg" width="32" height="32" alt="" />{profile.name}</a>
        <div><a href="#projects">项目</a><a href="#notes">文章</a><a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </nav>
      <div className="portrait-composition">
        <div className="portrait-copy">
          <motion.p className="portrait-eyebrow" initial={reduced ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}}>{homeIntro.eyebrow}</motion.p>
          <h1 id="intro-title">{homeIntro.title.map((line,index)=><span className="portrait-line" key={line}><motion.span initial={reduced ? false : {y:'110%',rotate:4}} animate={{y:0,rotate:0}} transition={{duration:.8,delay:.15+index*.12,ease:[.22,1,.36,1]}}>{line}</motion.span></span>)}</h1>
          <motion.div initial={reduced ? false : {opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:reduced?0:.45}}>
            <p className="portrait-description">{homeIntro.description}</p>
            <a className="portrait-cta" href="#projects">看看我的项目 <span aria-hidden="true">↘</span></a>
          </motion.div>
        </div>
        <motion.div className="portrait-art" initial={reduced ? false : {opacity:0,y:40,rotate:3}} animate={{opacity:1,y:0,rotate:0}} transition={{duration:1,delay:.15,ease:[.22,1,.36,1]}}>
          <div className="portrait-paper" aria-hidden="true" />
          <motion.img className="portrait-character" src={homeIntro.image} alt={homeIntro.imageAlt} width="1024" height="1280" fetchPriority="high" style={reduced?{}:{x,y}} />
          <span className="portrait-sticker" aria-hidden="true"><img src="/cat-icon.svg" alt="" width="64" height="64" /></span>
          <p className="portrait-caption">{homeIntro.caption}</p>
        </motion.div>
      </div>
      <a className="portrait-down" href="#projects">往下翻 <span aria-hidden="true">↓</span></a>
    </section>
  );
}
