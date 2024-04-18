import '@/styles/globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { defaultStyle } from '@/styles/defaultStyle';

export const metadata: Metadata = {
  title: 'Fashion EC',
  description: 'Fashion EC'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={defaultStyle}>{children}</body>
    </html>
  );
}
