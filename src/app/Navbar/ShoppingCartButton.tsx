'use client';

import { ShoppingCart } from '@/lib/db/cart';
import { FormatPrice } from '@/lib/format';
import Link from 'next/link';
import { MdOutlineShoppingCart } from 'react-icons/md';

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

const ShoppingCartButton = ({ cart }: ShoppingCartButtonProps) => {
  function closeDropdown() {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  }

  return (
    <div className='dropdown-end dropdown'>
      <label tabIndex={0} className='btn-ghost btn-circle btn'>
        <div className='indicator'>
          <MdOutlineShoppingCart size={25} />
          <span
            className={
              cart?.items.length === 0
                ? ''
                : 'badge badge-sm indicator-item bg-purple-500 text-white py-2.5'
            }
          >
            {cart?.size || ''}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className='card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow'
      >
        <div className='card-body'>
          <span className='text-lg font-bold'>{cart?.size || 0} Items</span>
          <span className='text-info'>
            Subtotal: {FormatPrice(cart?.subtotal || 0)}
          </span>
          <div className='card-actions'>
            <Link
              href='/cart'
              className='btn-primary btn-block btn'
              onClick={closeDropdown}
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartButton;
