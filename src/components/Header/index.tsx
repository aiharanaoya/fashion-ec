'use client';

import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChangeEvent, FC, useState } from 'react';

import { FormSearch } from '@/components/FormSearch';
import { IconButton } from '@/components/IconButton';
import { Logo } from '@/components/Logo';
import { useResponsive } from '@/hooks/useResponsive';

/**
 * ヘッダー
 */
export const Header: FC = () => {
  const { isPc } = useResponsive();

  /** 検索ワード */
  const [searchValue, setSearchValue] = useState('');

  /** 検索フォーム入力処理 */
  const changeFormSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  /** カートアイコン押下時処理 */
  const handleClickCart = () => {
    console.log('カートアイコン押下時処理');
  };

  /** ユーザーアイコン押下時処理 */
  const handleClickUser = () => {
    console.log('ユーザーアイコン押下時処理');
  };

  return isPc ? (
    <header
      className="
        sticky top-0 z-10 flex h-full w-full items-center
        justify-between border-b
        border-slate-300 bg-white px-8 py-2
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
        <div className="flex items-center gap-x-1">
          <IconButton onClick={handleClickCart}>
            <ShoppingCartIcon className="w-6" />
          </IconButton>
          <IconButton onClick={handleClickUser}>
            <UserIcon className="w-6" />
          </IconButton>
        </div>
      </div>
    </header>
  ) : (
    <header
      className="
        sticky top-0 z-10 flex h-full w-full flex-col items-center
        justify-between gap-y-2
        border-b border-slate-300 bg-white px-8 py-2
      "
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="duration-300 hover:opacity-70">
          <Logo />
        </Link>
        <div className="flex items-center gap-x-1">
          <IconButton onClick={handleClickCart}>
            <ShoppingCartIcon className="w-6" />
          </IconButton>
          <IconButton onClick={handleClickUser}>
            <UserIcon className="w-6" />
          </IconButton>
        </div>
      </div>
      <div className="w-full text-sm">
        <FormSearch
          href={`/search?query=${searchValue}`}
          value={searchValue}
          onChangeForm={changeFormSearch}
        />
      </div>
    </header>
  );
};
