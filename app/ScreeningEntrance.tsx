import { filmCollection, films } from '../src/data/profile';
import StudioDoodle from './StudioDoodle';
import DoodleReveal from './DoodleReveal';

export default function ScreeningEntrance() {
  return <section className="screening-entrance" id="screening-room" aria-labelledby="screening-entrance-title">
    <span className="section-alias" id="ai-videos" aria-hidden="true" />
    <DoodleReveal>
      <a className="screening-ticket" href={filmCollection.href}>
        <div className="screening-drawing" aria-hidden="true"><StudioDoodle kind="director" /><span>REC <i /></span></div>
        <div className="screening-ticket-copy">
          <p className="screening-eyebrow">{filmCollection.entrance.eyebrow}</p>
          <h2 id="screening-entrance-title">{filmCollection.title}</h2>
          <p className="screening-description">{filmCollection.entrance.description}</p>
          <span className="screening-cta">{filmCollection.entrance.action}<span aria-hidden="true">↗</span></span>
        </div>
        <div className="screening-ticket-stub"><span>ADMIT ONE</span><strong>{String(films.length).padStart(2, '0')}</strong><span>部 AI 影像</span><i aria-hidden="true" /></div>
      </a>
    </DoodleReveal>
  </section>;
}
