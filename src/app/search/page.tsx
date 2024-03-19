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
    }
  ];

  return (
    <main className="flex items-center px-4 pb-16 pt-8">
      <div className="h-full w-full max-w-5xl">
        <ItemSection headlineText="〜〜の検索結果" itemList={dummyItemList} />
      </div>
    </main>
  );
}
