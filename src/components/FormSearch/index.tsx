import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { FC, FormEventHandler, MouseEventHandler } from 'react';

import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';

type Props = {
  /** フォーム入力値 */
  value: string;
  /** フォーム入力時の処理 */
  onChangeForm: FormEventHandler;
  /** ボタン押下時の処理 */
  onClickButton: MouseEventHandler;
};

/**
 * 検索フォーム
 */
export const FormSearch: FC<Props> = ({ value, onChangeForm, onClickButton }) => {
  return (
    <div className="flex h-full w-full gap-x-1">
      <InputText value={value} placeholder="キーワードで検索" onChange={onChangeForm} />
      <div>
        <Button isPrimary onClick={onClickButton}>
          <MagnifyingGlassIcon className="w-6" />
        </Button>
      </div>
    </div>
  );
};
