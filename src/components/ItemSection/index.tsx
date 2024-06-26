import Link from 'next/link';
import { FC } from 'react';

import { H1 } from '@/components/H1';
import { ItemCard } from '@/components/ItemCard';
import type { ListItem } from '@/types/item';

type Props = {
  /** セクション名 */
  headlineText: string;
  /** アイテムリスト */
  itemList: Array<ListItem>;
};

/**
 * アイテムセクション
 */
export const ItemSection: FC<Props> = ({ headlineText, itemList }: Props) => {
  return (
    <section className="flex flex-col gap-y-8">
      <H1 text={headlineText} />
      <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
        {itemList.map((item) => (
          <li className="w-full" key={`item-list-${item.id}`}>
            <Link href={`/item/${item.id}`}>
              <ItemCard
                image={{
                  src: item.image.src,
                  alt: item.image.alt
                }}
                name={item.name}
                price={item.price}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
