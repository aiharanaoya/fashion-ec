import { fetchItemById } from '@/actions/item';
import { ItemDetailCard } from '@/components/ItemDetailCard';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const item = await fetchItemById(id);

  return (
    <div className="flex justify-center py-8 pb-4 md:py-12">
      <ItemDetailCard
        image={item.image}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    </div>
  );
}
