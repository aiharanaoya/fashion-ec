import { Carousel } from '@/components//Carousel';
import { ItemSection } from '@/components/ItemSection';
import { dummyCarouselImageList, dummyListItem } from '@/constants/dummy';

export default function Page() {
  /** ダミーアイテムリスト */
  const dummyItemList = new Array(4).fill(dummyListItem);

  return (
    <div className="flex flex-col items-center gap-y-16 pb-16 pt-8">
      <Carousel images={dummyCarouselImageList} />
      <div className="flex h-full w-full max-w-5xl flex-col gap-y-16 px-4">
        <ItemSection headlineText="新着アイテム" itemList={dummyItemList} />
        <ItemSection headlineText="おすすめアイテム" itemList={dummyItemList} />
      </div>
    </div>
  );
}
