'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, useId } from 'react';

import { Button } from '@/components/Button';
import { FormText } from '@/components/FormText';
import { H2 } from '@/components/H2';

export default function Page() {
  const router = useRouter();

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

  /** 名前入力値 */
  const [nameValue, setNameValue] = useState('');

  /** 郵便番号入力値 */
  const [zipCodeValue, setZipCodeValue] = useState('');

  /** 住所入力値 */
  const [addressValue, setAddressValue] = useState('');

  /** 電話番号入力値 */
  const [telValue, setTelValue] = useState('');

  /** メールアドレス入力値 */
  const [mailAddressValue, setMailAddressValue] = useState('');

  /** パスワード入力値 */
  const [passwordValue, setPasswordValue] = useState('');

  /** 名前入力処理 */
  const changeNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  /** 郵便番号入力処理 */
  const changeZipCodeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setZipCodeValue(e.target.value);
  };

  /** 住所入力処理 */
  const changeAddressValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressValue(e.target.value);
  };

  /** 電話番号入力処理 */
  const changeTelValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTelValue(e.target.value);
  };

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
            required
            labelText="名前"
            value={nameValue}
            onChange={changeNameValue}
            id={nameId}
          />
          <FormText
            required
            labelText="郵便番号"
            value={zipCodeValue}
            onChange={changeZipCodeValue}
            id={zipCodeId}
          />
          <FormText
            required
            labelText="住所"
            value={addressValue}
            onChange={changeAddressValue}
            id={addressId}
          />
          <FormText
            labelText="電話番号"
            value={telValue}
            onChange={changeTelValue}
            type="tel"
            id={telId}
          />
          <FormText
            required
            labelText="メールアドレス"
            value={mailAddressValue}
            onChange={changeMailAddressValue}
            type="email"
            id={mailAddressId}
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
        <Button
          isPrimary
          type="button"
          // TODO: 入力内容を保持して入力確認画面に遷移
          onClick={() => {
            router.push('/sign-up/confirm');
          }}
        >
          内容確認
        </Button>
      </form>
    </div>
  );
}
