import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zoe Zhang的个人主页',
  applicationName: 'Zoe Zhang的个人主页',
  description: 'Zoe Zhang 的个人项目、AI 生成视频与随手笔记。',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Zoe Zhang的个人主页',
    description: 'Zoe Zhang 的个人项目、AI 生成视频与随手笔记。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoe Zhang的个人主页',
    description: 'Zoe Zhang 的个人项目、AI 生成视频与随手笔记。',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
