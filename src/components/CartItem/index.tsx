import Image from 'next/image';
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
  return (
    <div className="flex gap-x-4">
      <div className="relative aspect-[9/10] h-full w-full">
        <Image className="rounded-2xl object-cover" src={image.src} alt={image.alt} fill />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-sm">{name}</p>
        <p className="text-sm">¥{price}</p>
      </div>
    </div>
  );
};
