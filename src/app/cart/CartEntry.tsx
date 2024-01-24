'use client';

import { CartItemWithProducts } from '@/lib/db/cart';
import { FormatPrice } from '@/lib/format';
import Image from 'next/image';
import Link from 'next/link';
import { useTransition } from 'react';

interface CartEntryProps {
  item: CartItemWithProducts;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

const CartEntry = ({
  item: { product, quantity },
  setProductQuantity,
}: CartEntryProps) => {
  const [isPending, startTransition] = useTransition();
  const quantityOptions: JSX.Element[] = [];

  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div className=''>
      <div className='flex  flex-wrap items-center gap-3'>
        <Image
          src={product.imageUrl}
          width={200}
          height={200}
          alt={product.name}
          className=' rounded-lg object-cover'
        />
        <div>
          <Link href={'/products/' + product.id} className=' font-bold'>
            {product.name}
          </Link>

          <div className=' text-left'>Price:{FormatPrice(product.price)}</div>

          <div className=' my-1 flex items-center gap-3'>
            Quantity:
            <select
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              <option value={0}>0 (Remove)</option>
              {quantityOptions}
            </select>
          </div>

          <div className=' flex items-center gap-3'>
            Total:{FormatPrice(product.price * quantity)}
            {isPending && (
              <span className='loading loading-spinner loading-md' />
            )}
          </div>
        </div>
      </div>
      <div className=' divider' />
    </div>
  );
};

export default CartEntry;
