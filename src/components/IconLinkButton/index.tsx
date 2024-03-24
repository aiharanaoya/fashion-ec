import Link from 'next/link';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type Props = {
  /** children */
  children: ReactNode;
  /** component props */
} & ComponentPropsWithoutRef<typeof Link>;

/**
 *  アイコンリンクボタン
 */
export const IconLinkButton: FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <Link
      {...rest}
      className="
        h-fit w-fit rounded-full p-3 duration-300
        hover:bg-slate-200
      "
    >
      {children}
    </Link>
  );
};
