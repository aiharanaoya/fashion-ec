import './../_styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fashion EC',
  description: 'Fashion EC'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
