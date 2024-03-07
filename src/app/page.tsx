import { Carousel } from '@/components//Carousel';
import { H2 } from '@/components/H2';
import { ItemCard } from '@/components/ItemCard';

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-y-16 pb-16 pt-8">
      <Carousel
        images={[
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
        ]}
      />
      <div className="flex h-full w-full max-w-5xl flex-col gap-y-16">
        <section className="flex flex-col gap-y-4">
          <H2 text="新着アイテム" />
          <ul className="flex w-full gap-x-4">
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-y-4">
          <H2 text="おすすめアイテム" />
          <ul className="flex w-full gap-x-4">
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-y-4">
          <H2 text="ランキング" />
          <ul className="flex w-full gap-x-4">
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
            <li className="w-full">
              <ItemCard
                image={{
                  src: '/dummy-image.png',
                  alt: ''
                }}
                name="アイテム名"
                price={5000}
              />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
