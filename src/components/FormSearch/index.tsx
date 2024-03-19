import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { FC, FormEventHandler } from 'react';

import { InputText } from '@/components/InputText';

type Props = {
  /** 検索アイコンリンクのhref */
  href: string;
  /** フォーム入力値 */
  value: string;
  /** フォーム入力時の処理 */
  onChangeForm: FormEventHandler;
};

/**
 * 検索フォーム
 */
export const FormSearch: FC<Props> = ({ href, value, onChangeForm }) => {
  return (
    <div className="relative flex h-full w-full items-center">
      <InputText value={value} placeholder="キーワードで検索" onChange={onChangeForm} />
      <Link
        href={href}
        className="absolute right-1 h-fit w-fit rounded-full
        p-3 duration-300 hover:bg-slate-200"
      >
        <MagnifyingGlassIcon className="w-6" />
      </Link>
    </div>
  );
};
