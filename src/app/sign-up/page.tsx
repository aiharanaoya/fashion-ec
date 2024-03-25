'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent } from 'react';

import { Button } from '@/components/Button';
import { FormText } from '@/components/FormText';
import { H2 } from '@/components/H2';

export default function Page() {
  const router = useRouter();

  /** メールアドレス入力値 */
  const [mailAddressValue, setMailAddressValue] = useState('');

  /** パスワード入力値 */
  const [passwordValue, setPasswordValue] = useState('');

  /** メールアドレス入力処理 */
  const changeMailAddressValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMailAddressValue(e.target.value);
  };

  /** パスワード入力処理 */
  const changePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-y-12 px-4 py-12">
      <form
        className="
          flex h-full w-full max-w-md flex-col gap-y-6
          rounded-2xl bg-slate-100 p-12 shadow-lg
        "
      >
        <H2 text="新規会員登録" />
        <div className="flex flex-col gap-y-4">
          <FormText
            labelText="メールアドレス"
            value={mailAddressValue}
            onChange={changeMailAddressValue}
            type="email"
            id="email"
          />
          <FormText
            labelText="パスワード"
            value={passwordValue}
            onChange={changePasswordValue}
            type="password"
            id="password"
          />
        </div>
        <Button
          isPrimary
          type="button"
          // TODO: 入力内容を保持して入力確認画面に遷移
          onClick={() => {
            router.push('/');
          }}
        >
          内容確認
        </Button>
      </form>
    </div>
  );
}
