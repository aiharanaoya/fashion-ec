'use client';

import { Dispatch, FC, SetStateAction } from 'react';

import { Button } from '@/components/Button';
import { ConfirmText } from '@/components/ConfirmText';
import { H2 } from '@/components/H2';

type Props = {
  /** 名前 */
  name: string;
  /** 郵便番号 */
  postalCode: string;
  /** 住所 */
  address: string;
  /** 電話番号 */
  phoneNumber: string;
  /** メールアドレス */
  email: string;
  /** パスワード */
  password: string;
  /** 確認画面かの更新関数 */
  setIsConfirm: Dispatch<SetStateAction<boolean>>;
  /** フォーム送信処理 */
  onSubmit: () => void;
};

/**
 * SignUpConfirm
 */
export const SignUpConfirm: FC<Props> = ({
  name,
  postalCode,
  address,
  phoneNumber,
  email,
  password,
  setIsConfirm,
  onSubmit
}: Props) => {
  return (
    <form className="flex flex-col gap-y-8" action={onSubmit}>
      <H2 text="新規会員登録確認" />
      <div className="flex flex-col gap-y-6">
        <ConfirmText labelText="名前" valueText={name} />
        <ConfirmText labelText="郵便番号" valueText={postalCode} />
        <ConfirmText labelText="住所" valueText={address} />
        <ConfirmText labelText="電話番号" valueText={phoneNumber} />
        <ConfirmText labelText="メールアドレス" valueText={email} />
        <ConfirmText labelText="パスワード" valueText={password} />
      </div>
      <div className="flex flex-col gap-y-4">
        <Button isPrimary type="submit">
          登録
        </Button>
        <Button
          type="button"
          onClick={() => {
            setIsConfirm(false);
          }}
        >
          修正
        </Button>
      </div>
    </form>
  );
};
