import ProductCard from '@/components/ProductCard';
import { prisma } from '@/lib/db/prisma';

const Home = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      id: 'desc',
    },
  });
  return (
    <div>
      <ProductCard product={products[0]} />
    </div>
  );
};

export default Home;
