'use client';

import { useState, useTransition } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

const AddToCartButton = ({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className='flex items-center gap-2'>
      <button
        className='btn btn-neutral text-lg text-white flex items-center'
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
        <FaShoppingCart size={20} />
      </button>
      {isPending && (
        <span className=' loading loading-spinner loading-md'></span>
      )}
      {!isPending && success && (
        <span className=' text-success'>Added to cart successfully</span>
      )}
    </div>
  );
};

export default AddToCartButton;
