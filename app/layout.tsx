import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Z. — Product / AI / Systems',
  description: '一个匿名的产品工作台：平台分发机制、AI 产品竞品分析、游戏系统拆解与真实项目实践。',
  openGraph: {
    title: 'Z. — Product / AI / Systems',
    description: '平台策略、AI 产品竞品分析、游戏系统拆解与真实项目经历。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z. — Product / AI / Systems',
    description: '平台策略、AI 产品竞品分析、游戏系统拆解与真实项目经历。',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
