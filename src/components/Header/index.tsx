'use client';

import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChangeEvent, FC, useState } from 'react';

import { FormSearch } from '@/components/FormSearch';
import { IconLinkButton } from '@/components/IconLinkButton';
import { LinkButton } from '@/components/LinkButton';
import { Logo } from '@/components/Logo';
import { isLogin } from '@/constants/dummy';

/**
 * ヘッダー
 */
export const Header: FC = () => {
  /** 検索ワード */
  const [searchValue, setSearchValue] = useState('');

  /** 検索フォーム入力処理 */
  const changeFormSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  /** ボタンエリア */
  const ButtonArea: FC = () => {
    return (
      <div className="flex items-center gap-x-1">
        {isLogin ? (
          <>
            <IconLinkButton href="/">
              <ShoppingCartIcon className="w-6" />
            </IconLinkButton>
            <IconLinkButton href="/">
              <UserIcon className="w-6" />
            </IconLinkButton>
          </>
        ) : (
          <LinkButton isPrimary href="/login">
            ログイン
          </LinkButton>
        )}
      </div>
    );
  };

  return (
    <>
      <header
        className="
        sticky top-0 z-10 hidden h-full w-full items-center
        justify-between border-b
        border-slate-300 bg-white px-8 py-2 md:flex
      "
      >
        <Link href="/" className="duration-300 hover:opacity-70">
          <Logo />
        </Link>
        <div className="flex items-center gap-x-2">
          <div className="w-96 text-sm">
            <FormSearch
              href={`/search?query=${searchValue}`}
              value={searchValue}
              onChangeForm={changeFormSearch}
            />
          </div>
          <ButtonArea />
        </div>
      </header>
      <header
        className="
        sticky top-0 z-10 flex h-full w-full flex-col items-center
        justify-between gap-y-2
        border-b border-slate-300 bg-white px-8 py-2 md:hidden
      "
      >
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="duration-300 hover:opacity-70">
            <Logo />
          </Link>
          <ButtonArea />
        </div>
        <div className="w-full text-sm">
          <FormSearch
            href={`/search?query=${searchValue}`}
            value={searchValue}
            onChangeForm={changeFormSearch}
          />
        </div>
      </header>
    </>
  );
};
