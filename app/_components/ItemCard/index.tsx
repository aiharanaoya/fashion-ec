import Image from 'next/image';
import { FC } from 'react';

type Props = {
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

/**
 * アイテムカード
 */
export const ItemCard: FC<Props> = ({ image, name, price }: Props) => {
  return (
    <div className="">
      <div className="">
        <Image src={image.src} alt={image.alt} fill className="rounded-2xl" />
      </div>
      <p className="">{name}</p>
      <p className="">¥ {price}</p>
    </div>
  );
};
