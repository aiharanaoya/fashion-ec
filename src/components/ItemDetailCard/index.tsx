'use client';

import Image from 'next/image';
import { FC } from 'react';

import { Button } from '@/components/Button';
import { ContentCard } from '@/components/ContentCard';
import { H1 } from '@/components/H1';
import { DetailItem } from '@/types/item';

type Props = Omit<DetailItem, 'id'>;

/**
 * ItemDetailCard
 */
export const ItemDetailCard: FC<Props> = ({ image, name, price, description }: Props) => {
  return (
    <ContentCard>
      <div className="flex flex-col gap-y-6">
        <div className="relative aspect-[9/10] size-full">
          <Image className="rounded-2xl object-cover" src={image.src} alt={image.alt} fill />
        </div>
        <div className="flex flex-col gap-y-4">
          <H1 text={name} />
          <p className="text-2xl font-bold">¥{price}</p>
          <p>{description}</p>
        </div>
        <Button
          isPrimary
          type="button"
          onClick={() => {
            console.log('カート追加処理');
          }}
        >
          カートに入れる
        </Button>
      </div>
    </ContentCard>
  );
};
