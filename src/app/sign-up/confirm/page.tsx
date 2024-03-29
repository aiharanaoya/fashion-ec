'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { H2 } from '@/components/H2';

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex h-full w-full flex-col items-center gap-y-12 px-4 py-12">
      <div
        className="
          flex h-full w-full max-w-md flex-col gap-y-6
          rounded-2xl bg-slate-100 p-12 shadow-lg
        "
      >
        <H2 text="新規会員登録確認" />
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">名前</p>
            <p className="text-lg font-bold">名前入力値</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">郵便番号</p>
            <p className="text-lg font-bold">郵便番号入力値</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">住所</p>
            <p className="text-lg font-bold">住所入力値</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">電話番号</p>
            <p className="text-lg font-bold">電話番号入力値</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">メールアドレス</p>
            <p className="text-lg font-bold">メールアドレス入力値</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">パスワード</p>
            <p className="text-lg font-bold">パスワード入力値</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Button
            isPrimary
            type="button"
            // TODO: 入力内容送信処理
            onClick={() => {
              router.push('/');
            }}
          >
            登録
          </Button>
          <Button
            type="button"
            // TODO: 入力内容を保持して入力画面に遷移
            onClick={() => {
              router.push('/sign-up');
            }}
          >
            修正
          </Button>
        </div>
      </div>
    </div>
  );
}
