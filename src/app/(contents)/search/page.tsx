import { ItemSection } from '@/components/ItemSection';
import { dummyListItem } from '@/constants/dummy';

export default function Page({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  /** 検索クエリ */
  const query = searchParams['query'];

  /** ダミーアイテムリスト */
  const dummyItemList = new Array(10).fill(dummyListItem);

  return (
    <div className="flex justify-center py-16 pt-8">
      <div className="h-full w-full max-w-5xl px-4">
        <ItemSection
          headlineText={query ? `${query}の検索結果` : '全てのアイテム'}
          itemList={dummyItemList}
        />
      </div>
    </div>
  );
}
