import { Carousel } from '@/components//Carousel';
import { ItemSection } from '@/components/ItemSection';

export default function Page() {
  /** ダミーカルーセル画像リスト */
  const dummyCarouselImageList = [
    {
      src: '/dummy-image.png',
      alt: ''
    },
    {
      src: '/dummy-image.png',
      alt: ''
    },
    {
      src: '/dummy-image.png',
      alt: ''
    }
  ];

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
    <main className="flex flex-col items-center gap-y-16 pb-16 pt-8">
      <Carousel images={dummyCarouselImageList} />
      <div className="flex h-full w-full max-w-5xl flex-col gap-y-16">
        <ItemSection headlineText="新着アイテム" itemList={dummyItemList} />
        <ItemSection headlineText="おすすめアイテム" itemList={dummyItemList} />
        <ItemSection headlineText="ランキング" itemList={dummyItemList} />
      </div>
    </main>
  );
}
