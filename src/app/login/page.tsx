'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { H2 } from '@/components/H2';
import { InputText } from '@/components/InputText';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex h-full w-full flex-col items-center gap-y-12 px-4 py-12">
      <form className="flex h-full w-full max-w-md flex-col gap-y-8 rounded-2xl bg-slate-100 p-12">
        <H2 text="ログイン" />
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <p className="text-sm">メールアドレス</p>
            <InputText value={0} onChange={() => {}} />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-sm">パスワード</p>
            <InputText value={0} onChange={() => {}} />
          </div>
        </div>
        <Button
          isPrimary
          type="button"
          onClick={() => {
            router.push('/');
          }}
        >
          ログイン
        </Button>
      </form>
      <div className="flex h-full w-full max-w-sm flex-col gap-y-4">
        <H2 text="初めてご利用の方" />
        <Button
          type="button"
          onClick={() => {
            console.log('会員登録画面に遷移');
          }}
        >
          新規会員登録
        </Button>
      </div>
    </div>
  );
}
