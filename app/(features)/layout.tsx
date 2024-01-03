import './../_styles/globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Footer } from '@/_components/Footer';
import { Header } from '@/_components/Header';
import { defaultStyle } from '@/_styles/defaultStyle';

export const metadata: Metadata = {
  title: 'Fashion EC',
  description: 'Fashion EC'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${defaultStyle}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
