import type { Metadata } from 'next';
import { eggyPartyReport } from '../../../src/data/reports';
import { ReportArticle } from '../ReportArticle';

export const metadata: Metadata = {
  title: '《蛋仔派对》游戏系统与 UGC 生态拆解 | Z. 调研笔记',
  description: eggyPartyReport.summary,
};

export default function EggyPartyPage() {
  return <ReportArticle report={eggyPartyReport} />;
}
