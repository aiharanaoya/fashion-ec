import { ComponentProps, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  /** children */
  children: ReactNode;
  /** primaryか */
  isPrimary?: boolean;
  /** component props */
} & Pick<ComponentProps<'button'>, 'type' | 'disabled' | 'onClick'>;

/**
 * ボタン
 */
export const Button: FC<Props> = ({ isPrimary = false, children, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        `flex h-full w-full items-center justify-center
        rounded border border-slate-800
        bg-white p-2 text-slate-800 duration-300
        enabled:hover:bg-slate-800 enabled:hover:text-white
        disabled:opacity-30`,
        isPrimary && `bg-slate-800 text-white enabled:hover:bg-white enabled:hover:text-slate-800`
      )}
    >
      {children}
    </button>
  );
};
