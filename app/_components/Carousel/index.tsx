import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
  /** 画像リスト */
  images: {
    src: string;
    alt: string;
  }[];
};

/**
 * カルーセル
 */
export const Carousel: FC<Props> = ({ images }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <ul className="flex gap-x-4 pl-4">
        {images.map((image, index) => (
          <li
            className="
              flex aspect-cinema shrink-0 grow-0 basis-3/4 justify-center
            "
            key={`carousel-image-list-${index}`}
          >
            <Image src={image.src} alt={image.alt} fill className="rounded-2xl" />
          </li>
        ))}
      </ul>
    </div>
  );
};
