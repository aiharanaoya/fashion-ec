import { Carousel } from '@/_components/Carousel';
import { H2 } from '@/_components/H2';
import { ItemCard } from '@/_components/ItemCard';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 p-8">
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
    </main>
  );
}
