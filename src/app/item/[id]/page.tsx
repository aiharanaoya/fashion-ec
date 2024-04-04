'use client';

import { ItemDetailCard } from '@/components/ItemDetailCard';
import { dummyDetailItem } from '@/constants/dummy';

export default function Page() {
  return (
    <div className="flex justify-center px-4 py-8 md:py-12">
      <ItemDetailCard
        image={dummyDetailItem.image}
        name={dummyDetailItem.name}
        price={dummyDetailItem.price}
        description={dummyDetailItem.description}
        onClickCart={() => {
          console.log('カート追加処理');
        }}
      />
    </div>
  );
}
