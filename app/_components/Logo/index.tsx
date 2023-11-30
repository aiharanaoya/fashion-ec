import { Abril_Fatface } from 'next/font/google';
import { FC } from 'react';

export const font = Abril_Fatface({ weight: '400', subsets: ['latin'] });

/**
 * ロゴ
 */
export const Logo: FC = () => {
  return <span className={`${font.className} text-3xl text-slate-800`}>Fashion EC</span>;
};
