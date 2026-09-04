import type { Metadata } from 'next';
import { platformDistributionReport } from '../../../src/data/reports';
import { ReportArticle } from '../ReportArticle';

export const metadata: Metadata = {
  title: '小红书 × 抖音：内容分发与用户经营 | Z. 调研笔记',
  description: platformDistributionReport.summary,
};

export default function PlatformDistributionPage() {
  return <ReportArticle report={platformDistributionReport} />;
}
