import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import { User } from '@/types/user';

/** SQLユーザー */
type SQLUser = {
  /** id */
  id: string;
  /** 名前 */
  name: string;
  /** 郵便番号 */
  postal_code: string;
  /** 住所 */
  address: string;
  /** 電話番号 */
  phone_number: string;
  /** メールアドレス */
  email: string;
  /** パスワード */
  password: string;
};

/** ユーザー1件取得 */
export const fetchUserByEmail = async (email: string): Promise<User> => {
  noStore();

  try {
    const data = await sql<SQLUser>`
      SELECT
        id,
        name,
        postal_code,
        address,
        phone_number,
        email,
        password
      FROM users
      WHERE items.email = ${email};
    `;

    const userList = data.rows.map((user) => {
      return {
        id: user.id,
        name: user.name,
        postalCode: user.postal_code,
        address: user.address,
        phoneNumber: user.phone_number,
        email: user.email,
        password: user.password
      };
    });

    return userList[0];
  } catch (error) {
    console.error(error);
    throw new Error('ユーザー1件取得の呼び出しでエラーが発生しました');
  }
};
