import { FC } from 'react';

type Props = {
  /** テキスト */
  text: string;
};

/**
 * h3
 */
export const H3: FC<Props> = ({ text }: Props) => {
  return <h3 className={'text-2xl font-bold text-slate-800'}>{text}</h3>;
};
