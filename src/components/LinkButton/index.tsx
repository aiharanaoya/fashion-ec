import Link from 'next/link';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  /** children */
  children: ReactNode;
  /** primaryか */
  isPrimary?: boolean;
  /** component props */
} & ComponentPropsWithoutRef<typeof Link>;

/**
 * リンクボタン
 */
export const LinkButton: FC<Props> = ({ isPrimary = false, children, ...rest }: Props) => {
  return (
    <Link
      {...rest}
      className={twMerge(
        `flex h-full w-full items-center justify-center
        rounded border border-slate-800
        bg-white p-3 text-slate-800 duration-300
        hover:bg-slate-800 hover:text-white`,
        isPrimary &&
          `bg-slate-800 text-white 
          hover:bg-white hover:text-slate-800`
      )}
    >
      {children}
    </Link>
  );
};
