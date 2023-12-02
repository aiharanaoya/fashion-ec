import { ComponentProps, FC, ReactNode } from 'react';

type Props = {
  /** children */
  children: ReactNode;
  /** component props */
} & ComponentProps<'button'>;

/**
 * ボタン
 */
export const Button: FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className="
        flex h-full w-full
        items-center justify-center
        rounded border border-slate-800
        bg-slate-800 p-2 text-white
        duration-300
        hover:bg-white hover:text-slate-800
      "
    >
      {children}
    </button>
  );
};
