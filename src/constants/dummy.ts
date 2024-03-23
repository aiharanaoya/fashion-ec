import type { ImageItem, ListItem } from '@/types/item';

/** ダミーカルーセル画像リスト */
export const dummyCarouselImageList: Array<ImageItem> = [
  {
    src: '/dummy-image.png',
    alt: ''
  },
  {
    src: '/dummy-image.png',
    alt: ''
  },
  {
    src: '/dummy-image.png',
    alt: ''
  }
];

/** ダミー一覧アイテム */
export const dummyListItem: ListItem = {
  image: {
    src: '/dummy-image.png',
    alt: ''
  },
  name: 'アイテム名アイテム名アイテム名',
  price: 5000
};
