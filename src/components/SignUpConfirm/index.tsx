'use client';

import { FC } from 'react';

import { Button } from '@/components/Button';
import { ConfirmText } from '@/components/ConfirmText';
import { H2 } from '@/components/H2';

type Props = {
  /** 名前 */
  name: string;
  /** 郵便番号 */
  zipCode: string;
  /** 住所 */
  address: string;
  /** 電話番号 */
  tel: string;
  /** メールアドレス */
  mailAddress: string;
  /** パスワード */
  password: string;
};

/**
 * SignUpConfirm
 */
export const SignUpConfirm: FC<Props> = ({
  name,
  zipCode,
  address,
  tel,
  mailAddress,
  password
}: Props) => {
  return (
    <div
      className="
        flex h-full w-full max-w-md flex-col gap-y-6
        rounded-2xl bg-slate-100 p-12 shadow-lg
      "
    >
      <H2 text="新規会員登録確認" />
      <div className="flex flex-col gap-y-4">
        <ConfirmText labelText="名前" valueText="名前入力値" />
        <ConfirmText labelText="郵便番号" valueText="郵便番号入力値" />
        <ConfirmText labelText="住所" valueText="住所入力値" />
        <ConfirmText labelText="電話番号" valueText="電話番号入力値" />
        <ConfirmText labelText="メールアドレス" valueText="メールアドレス入力値" />
        <ConfirmText labelText="パスワード" valueText="パスワード入力値" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Button
          isPrimary
          type="button"
          // TODO: 入力内容送信処理
          onClick={() => {}}
        >
          登録
        </Button>
        <Button
          type="button"
          // TODO: 入力内容を保持して入力画面に遷移
          onClick={() => {}}
        >
          修正
        </Button>
      </div>
    </div>
  );
};
