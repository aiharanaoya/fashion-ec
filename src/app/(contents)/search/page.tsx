import { fetchItemList } from '@/actions/item';
import { ItemSection } from '@/components/ItemSection';

export default async function Page({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  /** 検索クエリ */
  const query = searchParams['query'] as string;

  /** アイテム一覧取得 */
  const itemList = await fetchItemList(query);

  return (
    <div className="flex justify-center py-16 pt-8">
      <div className="h-full w-full max-w-5xl px-4">
        <ItemSection
          headlineText={query ? `${query}の検索結果` : '全てのアイテム'}
          itemList={itemList}
        />
      </div>
    </div>
  );
}
