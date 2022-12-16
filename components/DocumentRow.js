import React from 'react';
import { useRouter } from 'next/router';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { selectDoc } from '../features/modalSlice';

const DocumentRow = ({ id, fileName, date }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const openDoc = () => {
    dispatch(selectDoc({ id, fileName, date }));
    router.push(`/doc/${id}`);
  };

  return (
    <div
      onClick={openDoc}
      className='flex items-center p-4 rounded-lg hover:bg-gray-100 cursor-pointer'
    >
      {/* eslint-disable-next-line */}
      <img
        src='https://cdn.cdnlogo.com/logos/g/44/google-docs-icon.svg'
        alt=''
        className='h-8 w-8'
      />
      <p className='flex-grow pl-5 w-10 pr-10 truncate'>{fileName}</p>
      <p className='pr-10 text-sm'>{date.toDate().toLocaleDateString()}</p>

      <EllipsisVerticalIcon className='h-7 w-7 text-gray-700 cursor-pointer' />
    </div>
  );
};

export default DocumentRow;
