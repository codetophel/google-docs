import React from 'react';
import { useRouter } from 'next/router';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

const DocumentRow = ({ id, fileName, date }) => {
  return (
    <div className='flex items-center p-4 rounded-lg hover:bg-gray-100'>
      {/* eslint-disable-next-line */}
      <img
        src='https://cdn.cdnlogo.com/logos/g/44/google-docs-icon.svg'
        alt=''
        className='h-8 w-8'
      />
      <p className='flex-grow pl-5 w-10 pr-10 truncate'>{fileName}</p>
      <p className='pr-10 text-sm'>{date}</p>

      <EllipsisVerticalIcon className='h-7 w-7 text-gray-700 cursor-pointer' />
    </div>
  );
};

export default DocumentRow;
