import { fetchItemList } from '@/actions/item';
import { Carousel } from '@/components//Carousel';
import { ItemSection } from '@/components/ItemSection';
import { dummyCarouselImageList } from '@/constants/dummy';

export default async function Page() {
  const itemList = await fetchItemList();

  return (
    <div className="flex flex-col items-center gap-y-16 pb-16 pt-8">
      <Carousel images={dummyCarouselImageList} />
      <div className="flex h-full w-full max-w-5xl flex-col gap-y-16 px-4">
        <ItemSection headlineText="新着アイテム" itemList={itemList} />
        <ItemSection headlineText="おすすめアイテム" itemList={itemList} />
      </div>
    </div>
  );
}
