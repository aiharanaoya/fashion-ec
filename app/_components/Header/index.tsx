import { HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

import { FormSearch } from '@/_components/FormSearch';
import { IconButton } from '@/_components/IconButton';
import { Logo } from '@/_components/Logo';

/**
 * ヘッダー
 */
export const Header: FC = () => {
  return (
    <div
      className="
        flex h-full w-full items-center justify-between
        border-b border-slate-300 px-8 py-2
      "
    >
      <Logo />
      <div className="flex items-center gap-x-2">
        <div className="w-80 text-sm">
          <FormSearch value="" onChangeForm={() => {}} onClickButton={() => {}} />
        </div>
        <div className="flex items-center gap-x-1">
          <IconButton onClick={() => {}}>
            <HeartIcon className="w-6" />
          </IconButton>
          <IconButton onClick={() => {}}>
            <ShoppingCartIcon className="w-6" />
          </IconButton>
          <IconButton onClick={() => {}}>
            <UserIcon className="w-6" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
