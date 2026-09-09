import type { ReactNode } from 'react';

export type DoodleKind = 'curious' | 'stretch' | 'sleep' | 'headphones' | 'director' | 'peek' | 'cassette' | 'coffee' | 'spark' | 'film';

// Small, original ink drawings share the same stroke and paper cutouts.
export default function StudioDoodle({ kind, className = '' }: { kind: DoodleKind; className?: string }) {
  const paper = 'var(--doodle-cutout, var(--studio-paper))';
  const drawings: Record<DoodleKind, ReactNode> = {
    curious: <>
      <path d="M31 59C18 91 64 91 65 62M64 77C90 87 92 50 78 58C68 65 88 70 83 57" />
      <path d="M23 38 19 10 39 26Q49 22 58 27L78 13 75 42Q84 65 50 66Q17 64 23 38Z" fill="currentColor" />
      <path d="m28 42 13 3m17 0 13-6m-25 15 4 3 4-4M38 66l-3 16m18-15 2 17" stroke={paper} />
      <path d="m15 44 16 5M13 55l18-1m38-6 14-8m-14 14 18 2" />
    </>,
    stretch: <>
      <path d="M9 67 14 47 24 55 35 49 36 67Q55 67 59 34Q69 21 80 35L80 75 72 78 68 53Q60 77 31 79L8 79" fill="currentColor" />
      <path d="M78 37Q99 17 81 10Q68 6 70 19" strokeWidth="5" />
      <path d="m17 67 5 1m8-3 3-2m6 13 9-3" stroke={paper} />
      <path d="M8 87q22 2 41-1m13-74-4 6m-9-4 1 8" />
    </>,
    sleep: <>
      <path d="M21 46Q31 20 63 33Q85 37 82 62Q77 84 40 79Q13 80 14 61L12 42 26 49 37 40 41 60Q39 70 28 70" fill="currentColor" />
      <path d="M72 54Q45 43 44 64Q46 78 70 67M20 60q4 4 8-1m5-2 4-2" stroke={paper} />
      <path d="m17 21 12-1-9 10 12-1m18-15 10-1-7 9 10-1M16 85l66-1" />
    </>,
    headphones: <>
      <path d="M25 44 22 20 40 31Q48 28 58 32L72 19 73 46Q80 69 49 72Q19 70 25 44Z" fill="currentColor" />
      <path d="M17 51V36Q18 10 48 11Q79 11 80 37v18M31 76l-3 12m36-13 4 12M80 64q-1 15-21 17" />
      <rect x="12" y="40" width="12" height="24" rx="5" fill={paper} /><rect x="73" y="40" width="12" height="24" rx="5" fill={paper} />
      <path d="m33 49 10 3m14 0 9-4m-23 13q7 6 12-1" stroke={paper} />
      <path d="m52 4 2 6M5 26l5 4m78-5-5 4" />
    </>,
    director: <>
      <path d="M22 41 20 14 38 28Q49 23 60 29L76 15 73 42Q76 64 48 65Q19 65 22 41Z" fill="currentColor" />
      <path d="m30 43 11 2m16 0 10-4m-23 13 4 3 4-4" stroke={paper} />
      <path d="m20 70 56-10 3 25-56 6Z" fill={paper} />
      <path d="m20 70-3-11 52-16 4 10Z" fill={paper} /><path d="m27 56 8 9m7-14 9 10m5-14 8 10M23 78l53-9" />
      <path d="M11 59q-5 18 11 16m56-22q13 10 0 19" />
    </>,
    peek: <>
      <path d="M25 61 23 30 18 13 40 27Q49 23 59 28L78 13 72 44 73 65" fill="currentColor" />
      <path d="m32 44 9 2m17 0 10-3m-25 11 6 3 5-4" stroke={paper} />
      <path d="M8 64q42-3 79 0v21H9Z" fill={paper} />
      <path d="M24 64q-1-16 9-15 9 1 6 20-5 9-11 0m29-5q-2-16 7-15 9 1 7 19-5 10-11 1" fill={paper} />
      <path d="M17 91q19-3 40-1m9 0 17-1" />
    </>,
    cassette: <>
      <path d="m10 21 74-2 3 57-76 2Z" /><path d="m17 30 60-1 1 27-61 1Z" />
      <circle cx="31" cy="44" r="8" /><circle cx="64" cy="44" r="8" /><path d="M31 37v14m-7-7h14m26-7v14m-7-7h14M40 40h15m-15 7h15M25 76l6-13 32-1 8 14M19 24h2m56 0h1M18 70h1m58-1h1" />
    </>,
    coffee: <>
      <path d="m19 40 48-2-5 32Q41 86 24 71ZM67 43q26-8 14 17-6 7-17 4M12 82q35 8 71-1M32 29c-14-13 9-13-2-26m17 27c-10-12 10-14 2-23" />
      <path d="m32 55-1-8 7 5 8-1 5-5 1 15q-10 9-19-1Z" /><path d="m38 57 1 1m7-1 1 1" />
    </>,
    spark: <><path d="m48 8 7 28 28 10-27 9-8 30-10-30-28-8 28-10Z" /><path d="m74 10 3 8 8 2-8 3-3 9-2-9-8-3 8-2ZM10 71l9 8m-6-11 9 7" /></>,
    film: <>
      <circle cx="46" cy="45" r="31" /><circle cx="46" cy="45" r="5" />
      <circle cx="46" cy="26" r="7" /><circle cx="65" cy="45" r="7" /><circle cx="46" cy="64" r="7" /><circle cx="27" cy="45" r="7" />
      <path d="M46 76q34 0 38 10M11 90q40-2 76 0" />
    </>,
  };
  return <svg className={`studio-doodle ${className}`} viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{drawings[kind]}</svg>;
}
