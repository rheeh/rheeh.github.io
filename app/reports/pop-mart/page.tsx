import type { Metadata } from 'next';
import { popMartReport } from '../../../src/data/reports/pop-mart';
import { ReportArticle } from '../ReportArticle';

export const metadata: Metadata = {
  title: `${popMartReport.title} | Zoe Zhang`,
  description: popMartReport.summary,
  alternates: { canonical: 'https://rheeh.github.io/reports/pop-mart/' },
};
export default function PopMartPage() { return <ReportArticle report={popMartReport} />; }
