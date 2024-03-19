'use client';

import { useSearchParams } from 'next/navigation';

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

  const searchParams = useSearchParams();

  const query = searchParams.get('query');

  return (
    <main className="flex justify-center pb-16 pt-8">
      <div className="h-full w-full max-w-5xl px-4">
        <ItemSection headlineText={`${query}の検索結果`} itemList={dummyItemList} />
      </div>
    </main>
  );
}
