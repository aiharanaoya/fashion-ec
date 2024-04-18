import { Footer } from '@/components/Footer';
import { H1 } from '@/components/H1';
import { Header } from '@/components/Header';

export default function Page() {
  return (
    <>
      <Header isOnlyLogo />
      <main className="grow">
        <div className="flex justify-center pt-8">
          <div className="flex max-w-lg flex-col gap-y-4 px-8">
            <H1 text="ページが見つかりません" />
            <p>お探しのページは移動、または削除された可能性があります。</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
