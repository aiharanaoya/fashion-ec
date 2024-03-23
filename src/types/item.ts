/** 画像 */
export type ImageItem = {
  /** src */
  src: string;
  /** alt */
  alt: string;
};

/** 一覧アイテム */
export type ListItem = {
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
