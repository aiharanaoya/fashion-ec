import { fetchItemList } from '@/actions/item';
import { Carousel } from '@/components//Carousel';
import { ItemSection } from '@/components/ItemSection';
import { ImageItem } from '@/types/item';

export default async function Page() {
  /** カルーセル画像リスト */
  const carouselImageList: Array<ImageItem> = [
    {
      src: '/carousel-image-1.webp',
      alt: ''
    },
    {
      src: '/carousel-image-2.webp',
      alt: ''
    },
    {
      src: '/carousel-image-3.webp',
      alt: ''
    }
  ];

  /** アイテム一覧取得 */
  const itemList = await fetchItemList();

  return (
    <div className="flex flex-col items-center gap-y-16 pb-16 pt-8">
      <Carousel images={carouselImageList} />
      <div className="flex h-full w-full max-w-5xl flex-col gap-y-16 px-4">
        <ItemSection headlineText="新着アイテム" itemList={itemList} />
        <ItemSection headlineText="おすすめアイテム" itemList={itemList} />
      </div>
    </div>
  );
}
