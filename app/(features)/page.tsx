import { Carousel } from '@/_components/Carousel';

export default function Home() {
  return (
    <main className="p-8">
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
    </main>
  );
}
