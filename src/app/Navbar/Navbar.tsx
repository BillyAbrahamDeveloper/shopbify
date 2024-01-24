import { getCart } from '@/lib/db/cart';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ShoppingCartButton from './ShoppingCartButton';
import UserMenuButton from './UserMenuButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { resolve } from 'path';

async function searchProduct(formData: FormData) {
  'use server';

  const searchQuery = formData.get('searchQuery')?.toString();

  if (searchQuery) {
    redirect('/search?query=' + searchQuery);
  }
}

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className=' bg-base-100'>
      <div className='navbar max-w-7xl m-auto flex-col sm:flex-row gap-2'>
        <div className=' flex-1 '>
          <Link href={`/`} className=' text-xl normal-case'>
            <h1 className=' text-4xl font-bold text-slate-700 uppercase'>
              Shopbify
            </h1>
          </Link>
        </div>
        <div className='flex-none gap-2'>
          <form action={searchProduct}>
            <div className='form-control'>
              <input
                type='text'
                name='searchQuery'
                placeholder='Seach'
                className='input input-bordered w-full max-w-[200px]'
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
