import { FC } from 'react';

type Props = {
  /** テキスト */
  text: string;
};

/**
 * 見出し2
 */
export const H2: FC<Props> = ({ text }: Props) => {
  return <h2 className="text-2xl font-bold">{text}</h2>;
};
