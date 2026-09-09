/* eslint-disable @next/next/no-img-element */
import { lifeMoments, playgroundSites } from '../src/data/profile';
import DoodleReveal from './DoodleReveal';

export default function PlaygroundSites() {
  return <div className="playground-sites" id="playground-sites">
    <h3 className="playground-sites-label">{lifeMoments.sitesLabel}<span aria-hidden="true">↘</span></h3>
    {playgroundSites.map((site, index) => <DoodleReveal key={site.id} delay={index * 80}>
      <article className="playground-site" id={`project-${site.id}`}>
        <a className="playground-preview" href={site.links[0].href} target="_blank" rel="noreferrer" aria-label={`${site.title}，打开网站（新窗口）`}>
          <span className="playground-browser-bar" aria-hidden="true"><i /><i /><i /><b>{String(index + 1).padStart(2, '0')}</b></span>
          {site.preview && <img src={site.preview.src} alt={site.preview.alt} width={site.preview.width} height={site.preview.height} loading="lazy" />}
        </a>
        <div className="playground-site-copy">
          <span className="playground-site-type">{site.type}</span>
          <h4><a href={site.links[0].href} target="_blank" rel="noreferrer">{site.title}<span aria-hidden="true">↗</span></a></h4>
          <p>{site.summary}</p>
          <div className="playground-site-links">{site.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>)}</div>
        </div>
      </article>
    </DoodleReveal>)}
  </div>;
}
