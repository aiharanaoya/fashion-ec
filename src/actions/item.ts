'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import { DetailItem, ListItem } from '@/types/item';

/** SQLアイテム */
type SQLItem = {
  /** id */
  id: string;
  /** 名前 */
  name: string;
  /** 価格 */
  price: number;
  /** 説明 */
  description: string;
  /** 画像src */
  image_src: string;
  /** 画像alt */
  image_alt: string;
};

/** アイテム一覧取得 */
export const fetchItemList = async (query?: string): Promise<Array<ListItem>> => {
  noStore();

  try {
    const data = await sql<Omit<SQLItem, 'description'>>`
      SELECT
        id,
        name,
        price,
        image_src,
        image_alt
      FROM items
      WHERE items.name LIKE ${`%${query ?? ''}%`}
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

/** アイテム1件取得 */
export const fetchItemById = async (id: string): Promise<DetailItem> => {
  noStore();

  try {
    const data = await sql<SQLItem>`
      SELECT
        id,
        name,
        price,
        description,
        image_src,
        image_alt
      FROM items
      WHERE items.id = ${id};
    `;

    const itemList = data.rows.map((item) => {
      return {
        id: item.id,
        image: {
          src: item.image_src,
          alt: item.image_alt
        },
        name: item.name,
        price: item.price,
        description: item.description
      };
    });

    return itemList[0];
  } catch (error) {
    console.error(error);
    throw new Error('アイテム1件取得の呼び出しでエラーが発生しました');
  }
};
