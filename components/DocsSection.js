import React from 'react';
import { FolderIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import { collection, orderBy } from 'firebase/firestore';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import { db } from '../db/firebase';
import DocumentRow from './DocumentRow';

const DocsSection = () => {
  const { data: session } = useSession();
  const [snapshot] = useCollectionOnce(
    collection(db, 'userDocs', session.user.email, 'docs'),
    orderBy('timestamp', 'desc')
  );

  return (
    <div className='max-w-3xl mx-auto py-8 text-md text-gray-500'>
      <div className='flex items-center justify-between pb-5'>
        <p className='font-medium flex-grow'>My Documents</p>
        <p className='mr-12'>Date Created</p>
        <FolderIcon className='h-7 w-7 text-gray-500' />
      </div>

      {snapshot?.docs.map((doc) => (
        <DocumentRow
          key={doc.id}
          id={doc.id}
          fileName={doc.data().fileName}
          date={doc.data().timestamp.toDate().toLocaleDateString()}
        />
      ))}
    </div>
  );
};

export default DocsSection;
