import Link from 'next/link';

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
