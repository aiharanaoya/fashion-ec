'use client';

import { ChangeEvent, Dispatch, FC, SetStateAction, useId } from 'react';

import { Button } from '@/components/Button';
import { FormText } from '@/components/FormText';
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
  /** 名前入力処理 */
  changeName: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 郵便番号入力処理 */
  changeZipCode: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 住所入力処理 */
  changeAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 電話番号入力処理 */
  changeTel: (e: ChangeEvent<HTMLInputElement>) => void;
  /** メールアドレス入力処理 */
  changeMailAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  /** パスワード入力処理 */
  changePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 確認画面かの更新関数 */
  setIsConfirm: Dispatch<SetStateAction<boolean>>;
};

/**
 * SignUpForm
 */
export const SignUpForm: FC<Props> = ({
  name,
  zipCode,
  address,
  tel,
  mailAddress,
  password,
  changeName,
  changeZipCode,
  changeAddress,
  changeTel,
  changeMailAddress,
  changePassword,
  setIsConfirm
}: Props) => {
  /** 名前ID */
  const nameId = useId();

  /** 郵便番号ID */
  const zipCodeId = useId();

  /** 住所ID */
  const addressId = useId();

  /** 電話番号ID */
  const telId = useId();

  /** メールアドレスID */
  const mailAddressId = useId();

  /** パスワードID */
  const passwordId = useId();

  return (
    <form className="flex flex-col gap-y-8">
      <H2 text="新規会員登録" />
      <div className="flex flex-col gap-y-6">
        <FormText required labelText="名前" value={name} onChange={changeName} id={nameId} />
        <FormText
          required
          labelText="郵便番号"
          value={zipCode}
          onChange={changeZipCode}
          id={zipCodeId}
        />
        <FormText
          required
          labelText="住所"
          value={address}
          onChange={changeAddress}
          id={addressId}
        />
        <FormText labelText="電話番号" value={tel} onChange={changeTel} type="tel" id={telId} />
        <FormText
          required
          labelText="メールアドレス"
          value={mailAddress}
          onChange={changeMailAddress}
          type="email"
          id={mailAddressId}
        />
        <FormText
          required
          labelText="パスワード"
          value={password}
          onChange={changePassword}
          type="password"
          id={passwordId}
        />
      </div>
      <Button
        isPrimary
        type="button"
        onClick={() => {
          setIsConfirm(true);
        }}
      >
        内容確認
      </Button>
    </form>
  );
};
