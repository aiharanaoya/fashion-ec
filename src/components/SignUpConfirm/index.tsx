'use client';

import { Dispatch, FC, SetStateAction } from 'react';

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
  /** 確認画面かの更新関数 */
  setIsConfirm: Dispatch<SetStateAction<boolean>>;
  /** 送信処理 */
  onSubmit: () => void;
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
  password,
  setIsConfirm,
  onSubmit
}: Props) => {
  return (
    <form className="flex flex-col gap-y-8" onSubmit={onSubmit}>
      <H2 text="新規会員登録確認" />
      <div className="flex flex-col gap-y-6">
        <ConfirmText labelText="名前" valueText={name} />
        <ConfirmText labelText="郵便番号" valueText={zipCode} />
        <ConfirmText labelText="住所" valueText={address} />
        <ConfirmText labelText="電話番号" valueText={tel} />
        <ConfirmText labelText="メールアドレス" valueText={mailAddress} />
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
