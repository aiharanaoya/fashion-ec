import Image from 'next/image';
import { FC } from 'react';

import { H1 } from '@/components/H1';
import { DetailItem } from '@/types/item';

type Props = DetailItem;

/**
 * ItemDetailCard
 */
export const ItemDetailCard: FC<Props> = ({ image, name, price, description }: Props) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="relative aspect-[9/10] h-full w-full">
        <Image className="rounded-2xl object-cover" src={image.src} alt={image.alt} fill />
      </div>
      <div className="flex flex-col gap-y-4">
        <H1 text={name} />
        <p className="text-2xl font-bold">¥{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
