import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Z. — 把模糊的问题，做成可以验证的产品',
  description: '产品作品集：AI 客服产品实习、0→1 知识工具原型、消费产品设计与科研训练，以及平台分发、AI 产品与游戏系统的公开分析笔记。',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Z. — 把模糊的问题，做成可以验证的产品',
    description: 'AI 产品实习、0→1 原型与科研训练的项目集，以及公开的产品分析笔记。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z. — 把模糊的问题，做成可以验证的产品',
    description: 'AI 产品实习、0→1 原型与科研训练的项目集，以及公开的产品分析笔记。',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
