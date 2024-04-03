'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useId, useState } from 'react';

import { Button } from '@/components/Button';
import { FormText } from '@/components/FormText';
import { H2 } from '@/components/H2';
import { LinkButton } from '@/components/LinkButton';
import { PageCard } from '@/components/PageCard';

export default function Page() {
  const router = useRouter();

  /** メールアドレスID */
  const mailAddressId = useId();

  /** パスワードID */
  const passwordId = useId();

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
      <PageCard>
        <form className="flex flex-col gap-y-6">
          <H2 text="ログイン" />
          <div className="flex flex-col gap-y-4">
            <FormText
              labelText="メールアドレス"
              value={mailAddressValue}
              onChange={changeMailAddressValue}
              type="email"
              id={mailAddressId}
            />
            <FormText
              labelText="パスワード"
              value={passwordValue}
              onChange={changePasswordValue}
              type="password"
              id={passwordId}
            />
          </div>
          <Button
            isPrimary
            type="button"
            // TODO: ログイン処理
            onClick={() => {
              router.push('/');
            }}
          >
            ログイン
          </Button>
        </form>
      </PageCard>
      <div className="flex h-full w-full max-w-xl flex-col gap-y-4 px-10 md:px-16">
        <H2 text="初めてご利用の方" />
        <LinkButton href="/sign-up">新規会員登録</LinkButton>
      </div>
    </div>
  );
}
