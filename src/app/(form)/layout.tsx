import { ReactNode } from 'react';

import { auth } from '@/auth/config';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();

  return (
    <>
      <Header isLogin={!!session} isOnlyLogo />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
