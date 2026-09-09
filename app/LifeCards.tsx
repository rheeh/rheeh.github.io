'use client';
/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { lifeMoments } from '../src/data/profile';

export default function LifeCards() {
  const bounds=useRef<HTMLDivElement>(null);
  const [front,setFront]=useState(1);
  const [arrangement,setArrangement]=useState(0);
  const reduced=useReducedMotion();
  return (
    <section className="fragment-section" aria-labelledby="fragment-title">
      <div className="fragment-copy">
        <p className="fragment-kicker">OFF THE RECORD / 创作切片</p>
        <h2 id="fragment-title">{lifeMoments.title[0]}<br />{lifeMoments.title[1]}</h2>
        <p>{lifeMoments.description}</p>
        <small>从上边缘拖动卡片，或点标题看看完整内容。</small>
        <button className="fragment-reset" onClick={()=>{setArrangement(value=>value+1);setFront(1);}}>重新摆好 ↺</button>
      </div>
      <div ref={bounds} className="fragment-table">
        {lifeMoments.cards.map((card,index)=><Fragment key={`${arrangement}-${index}`} card={card} index={index} bounds={bounds} front={front===index} onFront={()=>setFront(index)} reduced={!!reduced} />)}
      </div>
    </section>
  );
}

import { useDragControls } from 'motion/react';
import type { RefObject } from 'react';
function Fragment({card,index,bounds,front,onFront,reduced}:{card:typeof lifeMoments.cards[number];index:number;bounds:RefObject<HTMLDivElement|null>;front:boolean;onFront:()=>void;reduced:boolean}) {
  const controls=useDragControls();
  return (
    <motion.article className={`fragment-card fragment-card-${index}`} drag={!reduced} dragListener={false} dragControls={controls} dragConstraints={bounds} dragElastic={.06} dragMomentum={false}
      onFocusCapture={onFront} onPointerDown={onFront} initial={reduced?false:{opacity:0,y:25}}
      whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.5,delay:index*.08}}
      style={{zIndex:front?5:index+1}}>
      <button className="fragment-grip" aria-label={`将${card.title}移到最前面，也可拖动`}
        onClick={onFront} onPointerDown={event=>{onFront();if(!reduced)controls.start(event);}}>⋮⋮ <span>{String(index+1).padStart(2,'0')}</span></button>
      <a href={card.href} target={card.href.startsWith('https:')?'_blank':undefined} rel={card.href.startsWith('https:')?'noreferrer':undefined}>
        <img className="fragment-image" src={card.src} alt={card.alt} width="260" height="300" loading="lazy" />
        <h3>{card.title} <span aria-hidden="true">↗</span></h3><p>{card.caption}</p>
      </a>
    </motion.article>
  );
}
