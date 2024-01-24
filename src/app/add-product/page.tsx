import FormSubmitButton from '@/components/FormSubmitButton';
import { prisma } from '@/lib/db/prisma';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'Add Product - Shopbify',
  description: 'You can order online anything to get on hand in a short time',
};

async function addProduct(formData: FormData) {
  'use server';

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/add-product');
  }

  const name = formData.get('name')?.toString();
  const description = formData.get('description')?.toString();
  const imageUrl = formData.get('imageUrl')?.toString();
  const price = Number(formData.get('price') || 0);

  if (!name || !description || !imageUrl || !price)
    throw Error('Missing required field');

  // for (let i = 0; i < 50; i++) {
  //   await prisma.product.create({
  //     data: { name, description, imageUrl, price },
  //   });
  // }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  });

  redirect('/');
}

const AddProductPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/add-product');
  }
  return (
    <div>
      <h1 className='mb-3 text-4xl font-bold text-emerald-400 '>Add Product</h1>
      <form action={addProduct}>
        <input
          name='name'
          required
          placeholder='Name'
          className=' input-bordered input mb-3 w-full'
        />

        <textarea
          name='description'
          required
          placeholder='Describtion of Product'
          className=' textarea-bordered textarea mb-3 w-full  h-32'
        />

        <input
          name='imageUrl'
          required
          placeholder='Image URL'
          type='url'
          className=' input-bordered input mb-3 w-full'
        />

        <input
          name='price'
          required
          placeholder='Price '
          type='number'
          className=' input-bordered input mb-3 w-full'
        />
        <FormSubmitButton className='btn-block '>Add Product</FormSubmitButton>
      </form>
    </div>
  );
};

export default AddProductPage;
