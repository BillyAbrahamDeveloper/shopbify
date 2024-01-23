import { getCart } from '@/lib/db/cart';

const CartPage = async () => {
  const cart = await getCart();

  return (
    <div className=''>
      <h1 className='mb-6 text-3xl font-bold'>Shopping Cart</h1>

      <div>
        {cart?.items.map((item) => (
          <div></div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
