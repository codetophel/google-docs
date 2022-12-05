import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  DocumentMinusIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className='flex items-center px-5 py-2 shadow-md md:px-10'>
      <Bars3Icon className='h-7 w-7 text-blue-500 hidden md:inline-flex mr-3' />
      {/* <DocumentMinusIcon className='h-10 w-10 text-blue-500' /> */}
      {/* eslint-disable-next-line */}
      <img
        src='https://cdn.cdnlogo.com/logos/g/44/google-docs-icon.svg'
        alt=''
        className='h-8 w-8'
      />
      <h1 className='hidden md:inline-flex ml-5 text-gray-700 text-lg font-semibold'>
        Docs
      </h1>

      <div className='mx-5 md:mx-20 text-gray-600 flex items-center flex-grow px-5 py-1 bg-gray-300 rounded-lg focus-within:text-gray-600 focus-within:shadow-md'>
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
        src='https://firebasestorage.googleapis.com/v0/b/insta-clone-d89df.appspot.com/o/posts%2FrHA3YnXNrIBhKnV9FFgh%2Fimage?alt=media&token=84b3f591-89ac-43c2-9517-a1d3744ee027'
        alt='nicco_pic'
        className='h-10 w-10 rounded-full ml-5 cursor-pointer'
      />
    </div>
  );
};

export default Header;
