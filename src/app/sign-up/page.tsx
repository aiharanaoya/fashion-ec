'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent } from 'react';

import { ContentCard } from '@/components/ContentCard';
import { SignUpConfirm } from '@/components/SignUpConfirm';
import { SignUpForm } from '@/components/SignUpForm';

export default function Page() {
  const router = useRouter();

  /** 確認画面か */
  const [isConfirm, setIsConfirm] = useState(false);

  /** 名前 */
  const [name, setName] = useState('');

  /** 郵便番号 */
  const [zipCode, setZipCode] = useState('');

  /** 住所 */
  const [address, setAddress] = useState('');

  /** 電話番号 */
  const [tel, setTel] = useState('');

  /** メールアドレス */
  const [mailAddress, setMailAddress] = useState('');

  /** パスワード */
  const [password, setPassword] = useState('');

  /** 名前入力処理 */
  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  /** 郵便番号入力処理 */
  const changeZipCode = (e: ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  /** 住所入力処理 */
  const changeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  /** 電話番号入力処理 */
  const changeTel = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };

  /** メールアドレス入力処理 */
  const changeMailAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setMailAddress(e.target.value);
  };

  /** パスワード入力処理 */
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  /** 送信処理 */
  const onSubmit = () => {
    router.push('/');
  };

  return (
    <div className="flex justify-center px-4 py-8 md:py-12">
      <ContentCard>
        {isConfirm ? (
          <SignUpConfirm
            name={name}
            zipCode={zipCode}
            address={address}
            tel={tel}
            mailAddress={mailAddress}
            password={password}
            setIsConfirm={setIsConfirm}
            onSubmit={onSubmit}
          />
        ) : (
          <SignUpForm
            name={name}
            zipCode={zipCode}
            address={address}
            tel={tel}
            mailAddress={mailAddress}
            password={password}
            changeName={changeName}
            changeZipCode={changeZipCode}
            changeAddress={changeAddress}
            changeTel={changeTel}
            changeMailAddress={changeMailAddress}
            changePassword={changePassword}
            setIsConfirm={setIsConfirm}
          />
        )}
      </ContentCard>
    </div>
  );
}
