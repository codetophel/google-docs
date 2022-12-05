import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

const NewDoc = () => {
  return (
    <div className='max-w-3xl mx-auto'>
      <div className='flex items-center justify-between py-5'>
        <h1 className='text-gray-700 font-semibold text-md md:text-lg'>
          Start a new document
        </h1>
        <EllipsisVerticalIcon className='h-7 w-7 text-gray-700 cursor-pointer' />
      </div>

      <div className='relative'>
        {/* eslint-disable-next-line */}
        <img
          src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png'
          alt=''
          className='h-50 w-40 border-2 hover:border-blue-500 cursor-pointer'
        />
        <p className='text-md mt-3 ml-2 text-gray-600 '>Blank</p>
      </div>
    </div>
  );
};

export default NewDoc;
