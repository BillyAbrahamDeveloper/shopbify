import PriceTag from '@/components/PriceTag';
import { prisma } from '@/lib/db/prisma';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import AddToCartButton from './AddToCartButton';

interface SingleProductPageProps {
  params: {
    id: string;
  };
}

// This function is storing data with cache
const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();

  return product;
});

// This function is creating meta data for SEO
export async function generateMetadata({
  params: { id },
}: SingleProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + '- Shopbify',
    description: product.description,
  };
}

const SingleProductPage = async ({
  params: { id },
}: SingleProductPageProps) => {
  const product = await getProduct(id);

  return (
    <div className=' flex flex-col lg:flex-row gap-5 lg:items-center'>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        priority
        className='rounded-lg'
      />
      <div>
        <h1 className='text-5xl font-bold'>{product.name}</h1>
        <PriceTag className='badge-info text-white' price={product.price} />
        <p className='py-6'>{product.description}</p>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
};

export default SingleProductPage;
