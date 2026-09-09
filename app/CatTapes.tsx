'use client';

import { useState } from 'react';
import StudioDoodle, { type DoodleKind } from './StudioDoodle';

const frames: DoodleKind[] = ['curious', 'cassette', 'stretch', 'spark', 'headphones', 'coffee', 'sleep', 'film', 'director', 'peek', 'spark', 'cassette'];

export default function CatTapes() {
  const [paused, setPaused] = useState(false);
  return <>
    <div className={`cat-tapes${paused ? ' is-paused' : ''}`} aria-hidden="true">
      {['left', 'right'].map((side) => <div className={`cat-tape cat-tape-${side}`} key={side}>
        <div className="cat-tape-track">
          {[0, 1].map((copy) => <div className="cat-tape-set" key={copy}>
            {[...frames, ...frames].map((kind, index) => <div className={`tape-frame tape-frame-${index % 4}`} key={index}>
              <StudioDoodle kind={side === 'right' ? frames[(index + 5) % frames.length] : kind} />
            </div>)}
          </div>)}
        </div>
      </div>)}
    </div>
    <button className="cat-tape-control" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? '继续猫咪胶带动画' : '暂停猫咪胶带动画'} title={paused ? '继续胶带' : '暂停胶带'}>
      <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>
    </button>
  </>;
}
