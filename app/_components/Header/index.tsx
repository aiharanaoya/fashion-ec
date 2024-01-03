'use client';

import { HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ChangeEvent, FC, useState } from 'react';

import { FormSearch } from '@/_components/FormSearch';
import { IconButton } from '@/_components/IconButton';
import { Logo } from '@/_components/Logo';

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

  /** 検索処理 */
  const handleClickSearch = () => {
    console.log('検索処理');
  };

  /** お気に入りアイコン押下時処理 */
  const handleClickFavorite = () => {
    console.log('お気に入りアイコン押下時処理');
  };

  /** カートアイコン押下時処理 */
  const handleClickCart = () => {
    console.log('カートアイコン押下時処理');
  };

  /** ユーザーアイコン押下時処理 */
  const handleClickUser = () => {
    console.log('ユーザーアイコン押下時処理');
  };

  return (
    <header
      className="
        flex h-full w-full items-center justify-between
        border-b border-slate-300 px-8 py-2
      "
    >
      <Link href="/" className="duration-300 hover:opacity-70">
        <Logo />
      </Link>
      <div className="flex items-center gap-x-2">
        <div className="w-96 text-sm">
          <FormSearch
            value={searchValue}
            onChangeForm={changeFormSearch}
            onClickButton={handleClickSearch}
          />
        </div>
        <div className="flex items-center gap-x-1">
          <IconButton onClick={handleClickFavorite}>
            <HeartIcon className="w-6" />
          </IconButton>
          <IconButton onClick={handleClickCart}>
            <ShoppingCartIcon className="w-6" />
          </IconButton>
          <IconButton onClick={handleClickUser}>
            <UserIcon className="w-6" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
