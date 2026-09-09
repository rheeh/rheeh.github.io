'use client';
/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { homeIntro, profile } from '../src/data/profile';

export default function HomeIntro() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [greeting, setGreeting] = useState(-1);
  const pointer = useMotionValue(0);
  const tilt = useSpring(pointer, { stiffness: 90, damping: 20 });
  const { scrollYProgress } = useScroll({ target: root, offset: ['start start', 'end end'] });
  const posterScale = useTransform(scrollYProgress, [0, 1], [1, .9]);
  const catScale = useTransform(scrollYProgress, [0, 1], [1, .74]);
  const catTurn = useTransform(scrollYProgress, [0, 1], [-7, 7]);
  const catY = useTransform(scrollYProgress, [0, 1], ['0%', '7%']);
  const lettersY = useTransform(scrollYProgress, [0, 1], ['0%', '-16%']);
  const cardsOpacity = useTransform(scrollYProgress, [0, .25, .85], [0, 0, 1]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  return (
    <section ref={root} className="ink-opening" id="top" aria-label="Zoe Zhang 的互动视觉海报">
      <div className="ink-sticky">
        <motion.div className="ink-poster" style={reduced?{}:{scale:posterScale}}
          onPointerMove={event=>{
            if (reduced || event.pointerType!=='mouse') return;
            const box=event.currentTarget.getBoundingClientRect();
            pointer.set(((event.clientX-box.left)/box.width-.5)*7);
          }} onPointerLeave={()=>pointer.set(0)}>
          <nav className="ink-nav" aria-label="主页快捷入口">
            <a className="ink-brand" href="#top"><img src="/cat-icon.svg" alt="" width="30" height="30" />{profile.name}</a>
            <div><a href="#projects">项目</a><a href="#notes">文章</a><a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </nav>
          <p className="ink-edition">{homeIntro.eyebrow}</p>
          <motion.div className="ink-title-stage" style={reduced?{}:{y:lettersY}}><motion.h1 className="ink-title" initial={reduced?false:{opacity:0,y:70}} animate={{opacity:1,y:0}} transition={{duration:.85,ease:[.22,1,.36,1]}}>{homeIntro.title}</motion.h1></motion.div>
          <div className="ink-aside"><p>{homeIntro.description}</p><span>产品 · AI 创作 · 研究</span></div>
          <motion.div className="ink-cat-position" style={reduced?{}:{scale:catScale,rotate:catTurn,y:catY}}>
            <motion.button className="ink-cat-button" style={reduced?{}:{rotate:tilt}} onClick={()=>setGreeting(value=>(value+1)%homeIntro.greeting.length)} aria-label="戳一下猫，听它说句话"
              initial={reduced?false:{opacity:0,scale:.88}} animate={{opacity:1,scale:1}}
              transition={{duration:.85,delay:.15,ease:[.22,1,.36,1]}} whileTap={reduced?{}:{scale:.96}}>
              <img src={homeIntro.image} alt={homeIntro.imageAlt} width="1122" height="1402" fetchPriority="high" />
            </motion.button>
          </motion.div>
          <p className={`ink-cat-talk${greeting<0?' is-quiet':''}`} aria-live="polite">{greeting<0?'':homeIntro.greeting[greeting]}</p>
          <motion.div className="ink-scatter ink-scatter-one" style={reduced?{}:{opacity:cardsOpacity,y:cardsY}} aria-hidden="true"><span>01</span><b>make<br />something.</b></motion.div>
          <motion.div className="ink-scatter ink-scatter-two" style={reduced?{}:{opacity:cardsOpacity,y:cardsY}} aria-hidden="true"><img src="/project-assets/auralis-home.jpg" alt="" width="280" height="180" /></motion.div>
          <footer className="ink-poster-foot"><a href="#projects">向下翻，进入我的项目 <span aria-hidden="true">↓</span></a><span>猫可以戳一下 ↗</span></footer>
        </motion.div>
      </div>
    </section>
  );
}
