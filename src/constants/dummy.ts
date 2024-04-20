import type { DetailItem, ImageItem, ListItem } from '@/types/item';

/** ダミーカルーセル画像リスト */
export const dummyCarouselImageList: Array<ImageItem> = [
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

/** ダミー一覧アイテム */
export const dummyListItem: ListItem = {
  id: '1',
  image: {
    src: '/blue-shirt.webp',
    alt: ''
  },
  name: 'アイテム名アイテム名アイテム名',
  price: 5000
};

/** ダミー詳細アイテム */
export const dummyDetailItem: DetailItem = {
  id: '1',
  image: {
    src: '/blue-shirt.webp',
    alt: ''
  },
  name: 'アイテム名アイテム名アイテム名',
  price: 5000,
  description:
    '説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文'
};

/** ログイン状態 */
export const isLogin = true;
