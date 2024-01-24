'use client';

import defaultPicture from '../assets/profile-pic.webp';
import { Session } from 'next-auth';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';

interface UserMenuButtonProps {
  session: Session | null;
}

const UserMenuButton = ({ session }: UserMenuButtonProps) => {
  const user = session?.user;

  return (
    <div className='dropdown dropdown-end '>
      <label tabIndex={0} className=' rounded-full  btn-circle cursor-pointer'>
        {user ? (
          <Image
            src={user.image || defaultPicture}
            width={35}
            height={35}
            alt={'//'}
            className='rounded-full '
          />
        ) : (
          <button
            onClick={() => signIn()}
            className=' py-1 px-4  rounded-xl hover:bg-slate-800 transition bg-slate-600 text-white '
          >
            Sign In
          </button>
        )}
      </label>

      <ul>
        <li>
          {user ? (
            <button
              className=' dropdown-content menu rounded-box menu-sm z-30 mt-3 w-52 bg-white shadow '
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Sign Out
            </button>
          ) : (
            ''
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserMenuButton;
