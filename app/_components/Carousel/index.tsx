'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  /** 選択中のインデックス */
  const [selectedIndex, setSelectedIndex] = useState(0);

  /** 進むボタン押下時処理 */
  const handleClickPrev = () => {
    emblaApi?.scrollPrev();
  };

  /** 戻るボタン押下時処理 */
  const handleClickNext = () => {
    emblaApi?.scrollNext();
  };

  /** ⚪︎ボタン押下時処理 */
  const handleClickSelect = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  useEffect(() => {
    emblaApi?.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  });

  return (
    <div className="flex h-full w-full flex-col gap-y-4">
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
      <ul className="flex justify-center gap-x-3">
        {images.map((_, index) => (
          <li className="h-3 w-3" key={`carousel-select-button-${index}`}>
            <button
              className={twMerge(
                `h-full w-full rounded-full bg-slate-200`,
                selectedIndex === index && `bg-slate-400`
              )}
              onClick={() => handleClickSelect(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
