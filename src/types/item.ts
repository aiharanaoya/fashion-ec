/** 画像 */
export type ImageItem = {
  /** src */
  src: string;
  /** alt */
  alt: string;
};

/** 一覧アイテム */
export type ListItem = {
  /** id */
  id: string;
  /** 画像 */
  image: {
    src: string;
    alt: string;
  };
  /** 名前 */
  name: string;
  /** 価格 */
  price: number;
};

/** 詳細アイテム */
export type DetailItem = ListItem & {
  /** 説明 */
  description: string;
};
