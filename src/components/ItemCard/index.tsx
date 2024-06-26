import Image from 'next/image';
import { FC } from 'react';

import type { ListItem } from '@/types/item';

type Props = Omit<ListItem, 'id'>;

/**
 * アイテムカード
 */
export const ItemCard: FC<Props> = ({ image, name, price }: Props) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg">
      <div className="relative aspect-[9/10] h-full w-full">
        <Image className="rounded-t-2xl object-cover" src={image.src} alt={image.alt} fill />
      </div>
      <div className="flex flex-col gap-y-1 p-2">
        <p className="text-sm">{name}</p>
        <p className="font-bold">¥{price}</p>
      </div>
    </div>
  );
};
