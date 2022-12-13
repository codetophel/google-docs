import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon, Squares2X2Icon } from '@heroicons/react/24/solid';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className='flex items-center px-5 py-2 shadow-md md:px-10'>
      <Bars3Icon className='h-7 w-7 text-gray-500 hidden md:inline-flex mr-3' />
      {/* eslint-disable-next-line */}
      <img
        src='https://cdn.cdnlogo.com/logos/g/44/google-docs-icon.svg'
        alt=''
        className='h-8 w-8'
      />
      <h1 className='hidden md:inline-flex ml-5 text-gray-700 text-lg font-semibold'>
        Docs
      </h1>

      <div className='mx-5 md:mx-20 text-gray-500 flex items-center flex-grow px-5 py-1 bg-gray-300 rounded-lg focus-within:text-gray-600 focus-within:shadow-md'>
        <MagnifyingGlassIcon className='h-5 w-5' />
        <input
          type='text'
          placeholder='Search...'
          className='px-5 text-base outline-none bg-transparent flex-grow'
        />
      </div>

      <Squares2X2Icon className='h-7 w-7 text-gray-500 hidden md:inline-flex md:ml-20 ml-5' />

      {/* eslint-disable-next-line */}
      <img
        src={session?.user?.image}
        alt='nicco_pic'
        className='h-10 w-10 rounded-full ml-5 cursor-pointer'
        onClick={signOut}
      />
    </div>
  );
};

export default Header;
