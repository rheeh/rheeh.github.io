import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Z. — Project Index',
  description: 'AI 产品、业务系统、游戏机制与研究工具项目，以及平台策略和商业模式分析。',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Z. — Project Index',
    description: 'AI 产品、业务系统、游戏机制与研究工具项目，以及平台策略和商业模式分析。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z. — Project Index',
    description: 'AI 产品、业务系统、游戏机制与研究工具项目，以及平台策略和商业模式分析。',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
