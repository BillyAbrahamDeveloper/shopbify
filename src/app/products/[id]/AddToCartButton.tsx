'use client';

import { FaShoppingCart } from 'react-icons/fa';

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  return (
    <div className='flex items-center gap-2'>
      <button
        className='btn btn-neutral text-lg text-white flex items-center'
        onClick={() => {}}
      >
        Add to Cart
        <FaShoppingCart size={20} />
      </button>
    </div>
  );
};

export default AddToCartButton;
