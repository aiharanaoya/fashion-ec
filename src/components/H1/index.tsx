import { FC } from 'react';

type Props = {
  /** テキスト */
  text: string;
};

/**
 * 見出し1
 */
export const H1: FC<Props> = ({ text }: Props) => {
  return <h1 className="text-4xl font-bold">{text}</h1>;
};
