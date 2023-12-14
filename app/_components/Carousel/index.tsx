'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { FC, useCallback } from 'react';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  /** 進むボタン押下時処理 */
  const handleClickPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  /** 戻るボタン押下時処理 */
  const handleClickNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <ul className="flex gap-x-4 pl-4">
        {images.map((image, index) => (
          <li
            className="
              flex aspect-[12/5] shrink-0 grow-0 basis-3/4 justify-center
            "
            key={`carousel-image-list-${index}`}
          >
            <Image src={image.src} alt={image.alt} fill className="rounded-2xl" />
          </li>
        ))}
      </ul>
      <button
        className="
          absolute inset-y-0 left-[10%] my-auto h-12 w-12 rounded-full 
          bg-white font-bold text-slate-400 shadow duration-300
          hover:h-14 hover:w-14
        "
        onClick={handleClickPrev}
      >
        ＜
      </button>
      <button
        className="
          absolute inset-y-0 right-[10%] my-auto h-12 w-12 rounded-full 
        bg-white font-bold text-slate-400 shadow duration-300
          hover:h-14 hover:w-14
        "
        onClick={handleClickNext}
      >
        ＞
      </button>
    </div>
  );
};
