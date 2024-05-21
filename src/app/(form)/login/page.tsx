'use client';

import { ChangeEvent, useId, useState } from 'react';

import { login } from '@/auth/action';
import { Button } from '@/components/Button';
import { ContentCard } from '@/components/ContentCard';
import { FormText } from '@/components/FormText';
import { H2 } from '@/components/H2';
import { LinkButton } from '@/components/LinkButton';

export default function Page() {
  /** メールアドレスID */
  const emailId = useId();

  /** パスワードID */
  const passwordId = useId();

  /** メールアドレス入力値 */
  const [emailValue, setEmailValue] = useState('');

  /** パスワード入力値 */
  const [passwordValue, setPasswordValue] = useState('');

  /** フォーム送信でエラーが発生したか */
  const [isSubmitError, setIsSubmitError] = useState(false);

  /** メールアドレス入力処理 */
  const changeEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  /** パスワード入力処理 */
  const changePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  /** フォーム送信処理 */
  const handleSubmit = async () => {
    setIsSubmitError(false);
    try {
      await login(emailValue, passwordValue);
    } catch (error) {
      setIsSubmitError(true);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-y-12 px-4 py-8 md:py-12">
      <ContentCard>
        <form className="flex flex-col gap-y-8" action={handleSubmit}>
          <H2 text="ログイン" />
          {isSubmitError && (
            <p className="text-red-500 ">メールアドレスまたはパスワードが違います</p>
          )}
          <div className="flex flex-col gap-y-6">
            <FormText
              required
              labelText="メールアドレス"
              value={emailValue}
              onChange={changeEmailValue}
              type="email"
              id={emailId}
            />
            <FormText
              required
              labelText="パスワード"
              value={passwordValue}
              onChange={changePasswordValue}
              type="password"
              id={passwordId}
            />
          </div>
          <Button isPrimary>ログイン</Button>
        </form>
      </ContentCard>
      <div className="flex h-full w-full max-w-xl flex-col gap-y-6 px-10 md:px-16">
        <H2 text="初めてご利用の方" />
        <LinkButton href="/sign-up">新規会員登録</LinkButton>
      </div>
    </div>
  );
}
