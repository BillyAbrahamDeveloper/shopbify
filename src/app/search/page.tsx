import ProductCard from '@/components/ProductCard';
import { prisma } from '@/lib/db/prisma';
import { Metadata } from 'next';
import { title } from 'process';

interface SearchPageProps {
  searchParams: { query: string };
}

export const generateMetadata = ({
  searchParams: { query },
}: SearchPageProps): Metadata => {
  return {
    title: `Search: ${query} -Shopbify`,
  };
};

const SearchPage = async ({ searchParams: { query } }: SearchPageProps) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
      ],
    },
    orderBy: { id: 'desc' },
  });
  if (products.length === 0) {
    return <div className='text-center text-black'>No Product Found!</div>;
  }
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default SearchPage;
