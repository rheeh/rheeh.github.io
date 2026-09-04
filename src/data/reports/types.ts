export type EvidenceLabel = '公开事实' | '分析推断' | '方案建议' | '混合证据';

export type ReportSource = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  accessed: string;
  note?: string;
};

export type ReportImage = {
  src: string;
  alt: string;
  sourceId: string;
};

type CitedBlock = {
  citations?: string[];
};

export type ReportBlock =
  | (CitedBlock & {
      type: 'text';
      paragraphs: string[];
    })
  | (CitedBlock & {
      type: 'callout';
      label: string;
      title: string;
      body: string;
      tone?: 'ink' | 'lavender' | 'sage' | 'peach' | 'blue';
    })
  | (CitedBlock & {
      type: 'metrics';
      items: Array<{ value: string; label: string; note: string }>;
    })
  | (CitedBlock & {
      type: 'compare';
      caption: string;
      columns: string[];
      rows: string[][];
    })
  | (CitedBlock & {
      type: 'flow';
      tracks: Array<{
        label: string;
        tone: 'red' | 'dark' | 'lavender' | 'sage' | 'gold';
        steps: Array<{ title: string; note: string }>;
      }>;
    })
  | (CitedBlock & {
      type: 'cards';
      columns?: 2 | 3 | 4;
      items: Array<{ label: string; title: string; body: string; meta?: string }>;
    })
  | (CitedBlock & {
      type: 'list';
      ordered?: boolean;
      items: Array<{ title: string; body: string }>;
    })
  | (CitedBlock & {
      type: 'bars';
      caption: string;
      note: string;
      items: Array<{ label: string; value: number; display: string }>;
    })
  | (CitedBlock & {
      type: 'proposal';
      name: string;
      objective: string;
      hypothesis: string;
      steps: string[];
      primaryMetric: string;
      guardrails: string[];
    });

export type ReportSection = {
  id: string;
  number: string;
  title: string;
  intro?: string;
  evidence: EvidenceLabel;
  blocks: ReportBlock[];
};

export type Report = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortTitle: string;
  summary: string;
  readTime: string;
  accent: 'red' | 'dark' | 'lavender';
  heroImages: ReportImage[];
  capabilityTags: string[];
  question: string;
  conclusion: string;
  sections: ReportSection[];
  sources: ReportSource[];
};

export type AnalysisShowcase = {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  format: string;
  href: string;
  capabilityTags: string[];
  accent: 'cobalt' | 'coral' | 'sage' | 'gold' | 'ink';
};
