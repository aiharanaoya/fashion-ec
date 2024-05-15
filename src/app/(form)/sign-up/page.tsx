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
  const [postalCode, setPostalCode] = useState('');

  /** 住所 */
  const [address, setAddress] = useState('');

  /** 電話番号 */
  const [phoneNumber, setPhoneNumber] = useState('');

  /** メールアドレス */
  const [email, setEmail] = useState('');

  /** パスワード */
  const [password, setPassword] = useState('');

  /** 名前入力処理 */
  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  /** 郵便番号入力処理 */
  const changePostalCode = (e: ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.target.value);
  };

  /** 住所入力処理 */
  const changeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  /** 電話番号入力処理 */
  const changePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  /** メールアドレス入力処理 */
  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
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
            postalCode={postalCode}
            address={address}
            phoneNumber={phoneNumber}
            email={email}
            password={password}
            setIsConfirm={setIsConfirm}
            onSubmit={onSubmit}
          />
        ) : (
          <SignUpForm
            name={name}
            postalCode={postalCode}
            address={address}
            phoneNumber={phoneNumber}
            email={email}
            password={password}
            changeName={changeName}
            changePostalCode={changePostalCode}
            changeAddress={changeAddress}
            changePhoneNumber={changePhoneNumber}
            changeEmail={changeEmail}
            changePassword={changePassword}
            setIsConfirm={setIsConfirm}
          />
        )}
      </ContentCard>
    </div>
  );
}
