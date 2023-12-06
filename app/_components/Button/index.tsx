import { ComponentProps, FC, ReactNode } from 'react';

type Props = {
  /** children */
  children: ReactNode;
  /** component props */
} & Pick<ComponentProps<'button'>, 'type' | 'disabled' | 'onClick'>;

/**
 * ボタン
 */
export const Button: FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className="
        flex h-full w-full items-center justify-center
        rounded border border-slate-800
        bg-slate-800 p-2 text-white duration-300
        enabled:hover:bg-white enabled:hover:text-slate-800
        disabled:opacity-30
      "
    >
      {children}
    </button>
  );
};
