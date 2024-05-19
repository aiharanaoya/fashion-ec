'use client';

import { Button } from '@/components/Button';
import { CartItem } from '@/components/CartItem';
import { H1 } from '@/components/H1';
import { ListItem } from '@/types/item';

/** ダミー一覧アイテム */
const dummyListItem: ListItem = {
  id: '1',
  image: {
    src: '/blue-shirt.webp',
    alt: ''
  },
  name: 'アイテム名アイテム名アイテム名',
  price: 5000
};

export default function Page() {
  /** ダミーアイテムリスト */
  const dummyItemList = new Array(4).fill(dummyListItem);

  return (
    <div className="flex justify-center pb-16 pt-8">
      <div className="flex h-full w-full max-w-5xl flex-col gap-y-8 px-4">
        <H1 text="カート" />
        <div className="flex h-full w-full flex-col gap-y-12 md:flex-row md:gap-x-12">
          <div className="flex h-full w-full flex-[2] flex-col items-end gap-y-4">
            <ul className="flex h-full w-full flex-col gap-y-4">
              {dummyItemList.map((item) => (
                <li key={item.id} className="border-b border-slate-300 pb-4">
                  <CartItem
                    image={{
                      src: item.image.src,
                      alt: item.image.alt
                    }}
                    name={item.name}
                    price={item.price}
                    onClickDelete={() => {}}
                  />
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold">商品合計 ¥20000</p>
          </div>
          <div className="h-full w-full flex-1 rounded-2xl bg-slate-100 p-10 shadow-lg">
            <Button isPrimary onClick={() => {}}>
              レジへ進む
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
