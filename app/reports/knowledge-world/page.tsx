import type { Metadata } from 'next';
import { knowledgeWorldReport } from '../../../src/data/reports';
import { ReportArticle } from '../ReportArticle';

export const metadata: Metadata = {
  title: 'Knowledge World 竞品分析 | Z. Product Notes',
  description: knowledgeWorldReport.summary,
};

export default function KnowledgeWorldPage() {
  return <ReportArticle report={knowledgeWorldReport} />;
}
