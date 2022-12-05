import React from 'react';
import { FolderIcon } from '@heroicons/react/24/solid';

const DocsSection = () => {
  return (
    <div className='max-w-3xl mx-auto py-8 text-md text-gray-500'>
      <div className='flex items-center justify-between pb-5'>
        <p className='font-medium flex-grow'>My Documents</p>
        <p className='mr-12'>Date Created</p>
        <FolderIcon className='h-7 w-7 text-gray-500' />
      </div>
    </div>
  );
};

export default DocsSection;
