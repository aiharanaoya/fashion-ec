import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  /** エラーか */
  isError?: boolean;
  /** component props */
} & Pick<
  ComponentProps<'input'>,
  'type' | 'id' | 'name' | 'value' | 'placeholder' | 'disabled' | 'required' | 'onChange'
>;

/**
 * インプットテキスト
 */
export const InputText: FC<Props> = ({ isError = false, ...rest }) => {
  return (
    <input
      {...rest}
      className={twMerge(
        `h-full w-full
        rounded-lg border border-slate-300 p-4
        outline-none duration-300 
        placeholder:text-slate-400
        focus:border-slate-800 disabled:opacity-30`,
        isError &&
          `border-red-500 text-red-500
          placeholder:text-red-500 focus:border-red-500`
      )}
      aria-label="input text"
    />
  );
};
