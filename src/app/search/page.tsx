'use client';

import { useSearchParams } from 'next/navigation';
import { FC, Suspense } from 'react';

import { ItemSection } from '@/components/ItemSection';

export default function Page() {
  /** ダミーアイテムリスト */
  const dummyItemList = [
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    },
    {
      image: {
        src: '/dummy-image.png',
        alt: ''
      },
      name: 'アイテム名アイテム名アイテム名',
      price: 5000
    }
  ];

  /** 検索結果セクション */
  const ResultSection: FC = () => {
    const searchParams = useSearchParams();

    return (
      <ItemSection
        headlineText={`${searchParams.get('query')}の検索結果`}
        itemList={dummyItemList}
      />
    );
  };

  return (
    <main className="flex justify-center py-16 pt-8">
      <div className="h-full w-full max-w-5xl px-4">
        <Suspense fallback={<p>loading</p>}>
          <ResultSection />
        </Suspense>
      </div>
    </main>
  );
}
