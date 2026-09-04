import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Z. — 项目与笔记',
  description: '可以直接体验或查看源码的产品与研究项目，以及产品、游戏和行业调研笔记。',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Z. — 项目与笔记',
    description: '可以直接体验或查看源码的产品与研究项目，以及产品、游戏和行业调研笔记。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z. — 项目与笔记',
    description: '可以直接体验或查看源码的产品与研究项目，以及产品、游戏和行业调研笔记。',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
