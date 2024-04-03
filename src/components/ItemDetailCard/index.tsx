import { FC } from 'react';

type Props = {
  /** テキスト */
  text: string;
};

/**
 * ItemDetailCard
 */
export const ItemDetailCard: FC<Props> = ({ text }: Props) => {
  return <div className="">{text}</div>;
};
