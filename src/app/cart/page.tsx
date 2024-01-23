import { getCart } from '@/lib/db/cart';
import CartEntry from './CartEntry';
import { setProductQuantity } from './actions';
import { FormatPrice } from '@/lib/format';

const CartPage = async () => {
  const cart = await getCart();

  return (
    <div className=' text-center'>
      <h1 className='mb-6 text-3xl font-bold'>Shopping Cart</h1>
      {cart?.items.map((item) => (
        <CartEntry
          item={item}
          key={item.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && (
        <p>Cart is empty, please choose something to purchase!</p>
      )}
      <div>
        <p className=' bg-purple-900 m-auto font-bold text-2xl text-white rounded-lg p-3 mt-10 mb-2'>
          Total: {FormatPrice(cart?.subtotal || 0)}
        </p>
        <button className='btn  btn-success text-white '>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
