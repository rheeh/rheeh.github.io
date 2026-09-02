import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Auralis — Sonic Drama Studio Demo',
  description: 'Auralis 广播剧制作工作台的静态交互 Demo。',
};

export default function AuralisLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
