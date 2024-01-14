import FormSubmitButton from '@/components/FormSubmitButton';
import { prisma } from '@/lib/db/prisma';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Add Product - Shopbify',
  description: 'You can order online anything to get on hand in a short time',
};

async function addProduct(formData: FormData) {
  'use server';

  const name = formData.get('name')?.toString();
  const description = formData.get('description')?.toString();
  const imageUrl = formData.get('imageUrl')?.toString();
  const price = Number(formData.get('price') || 0);

  if (!name || !description || !imageUrl || !price)
    throw Error('Missing required field');

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

const AddProductPage = () => {
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
