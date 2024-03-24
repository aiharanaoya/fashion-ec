import { ComponentPropsWithoutRef, FC } from 'react';

import { InputText } from '@/components/InputText';

type Props = {
  /** ラベルテキスト */
  labelText: string;
  /** component props */
} & ComponentPropsWithoutRef<'input'>;

/**
 * フォームテキスト
 */
export const FormText: FC<Props> = ({ labelText, required, id, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label className="flex gap-x-1" htmlFor={id}>
        <span className="text-sm">{labelText}</span>
        {required && <span className="text-red-500">*</span>}
      </label>
      <InputText required={required} id={id} {...rest} />
    </div>
  );
};
