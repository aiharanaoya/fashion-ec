import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import { ListItem } from '@/types/item';

/** SQLアイテム */
type SQLItem = {
  /** id */
  id: string;
  /** 名前 */
  name: string;
  /** 価格 */
  price: number;
  /** 画像src */
  image_src: string;
  /** 画像alt */
  image_alt: string;
};

/** アイテム一覧取得 */
export const fetchItemList = async (): Promise<Array<ListItem>> => {
  noStore();
  try {
    const data = await sql<SQLItem>`
        SELECT
          id,
          name,
          price,
          image_src,
          image_alt
        FROM items
      `;

    const itemList = data.rows.map((item) => {
      return {
        id: item.id,
        image: {
          src: item.image_src,
          alt: item.image_alt
        },
        name: item.name,
        price: item.price
      };
    });

    return itemList;
  } catch (error) {
    console.error(error);
    throw new Error('アイテム一覧取得の呼び出しでエラーが発生しました');
  }
};
