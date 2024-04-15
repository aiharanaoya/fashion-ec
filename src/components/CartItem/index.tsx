import { FC } from 'react';

import { ListItem } from '@/types/item';

type Props = Omit<ListItem, 'id'> & {
  /** 削除処理 */
  onClickDelete: () => void;
};

/**
 * CartItem
 */
export const CartItem: FC<Props> = ({ image, name, price, onClickDelete }: Props) => {
  return <div className=""></div>;
};
