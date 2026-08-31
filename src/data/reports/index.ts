export { eggyPartyReport } from './eggy-party';
export { knowledgeWorldReport } from './knowledge-world';
export { platformDistributionReport } from './platform-distribution';
export type {
  EvidenceLabel,
  Report,
  ReportBlock,
  ReportImage,
  ReportSection,
  ReportSource,
} from './types';

import { eggyPartyReport } from './eggy-party';
import { knowledgeWorldReport } from './knowledge-world';
import { platformDistributionReport } from './platform-distribution';

export const reports = [platformDistributionReport, knowledgeWorldReport, eggyPartyReport];
