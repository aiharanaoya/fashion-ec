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
  setIsConfirm
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
        <ConfirmText labelText="名前" valueText={name} />
        <ConfirmText labelText="郵便番号" valueText={zipCode} />
        <ConfirmText labelText="住所" valueText={address} />
        <ConfirmText labelText="電話番号" valueText={tel} />
        <ConfirmText labelText="メールアドレス" valueText={mailAddress} />
        <ConfirmText labelText="パスワード" valueText={password} />
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
          onClick={() => {
            setIsConfirm(false);
          }}
        >
          修正
        </Button>
      </div>
    </div>
  );
};
