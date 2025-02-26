import Image from 'next/image';
import { FC } from 'react';

import { Button } from '@/components/Button';
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
      <div className="relative aspect-[9/10] size-full flex-1">
        <Image className="rounded-2xl object-cover" src={image.src} alt={image.alt} fill />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-y-4 py-4">
        <div className="flex flex-col gap-y-2">
          <p>{name}</p>
          <p>¥{price}</p>
        </div>
        <div>
          <Button onClick={onClickDelete}>削除</Button>
        </div>
      </div>
    </div>
  );
};
