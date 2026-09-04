import type { Metadata } from 'next';
import { knowledgeWorldReport } from '../../../src/data/reports';
import { ReportArticle } from '../ReportArticle';

export const metadata: Metadata = {
  title: 'Knowledge World 竞品调研 | Z. 调研笔记',
  description: knowledgeWorldReport.summary,
};

export default function KnowledgeWorldPage() {
  return <ReportArticle report={knowledgeWorldReport} />;
}
