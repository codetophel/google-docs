import { collection, query } from 'firebase/firestore';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {
  useCollectionOnce,
  useDocumentOnce,
} from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import Login from '../../components/Login';
import { db } from '../../db/firebase';
import { selectSelectedDoc } from '../../features/modalSlice';

const Doc = () => {
  const { data: session } = useSession();

  const router = useRouter();
  //   const { id } = router.query;

  //   const [snapshot, loadingSnapshot] = useDocumentOnce(
  //     collection(db, 'userDocs', session.user.email, 'docs', id)
  //   );

  //redirect if user tries to access a URL they do not have access to
  //   if (!loadingSnapshot && !snapshot?.data()?.fileName) {
  //     router.replace('/');
  //   }

  const selectedDoc = useSelector(selectSelectedDoc);

  //redirect to login page is session doesn't exist
  if (!session) return <Login />;

  return (
    <div>
      <header className='flex justify-between items-center p-3 pb-1'>
        <span onClick={() => router.push('/')} className='cursor-pointer'>
          {/* eslint-disable-next-line */}
          <img
            src='https://cdn.cdnlogo.com/logos/g/44/google-docs-icon.svg'
            alt=''
            className='h-8 w-8'
          />
        </span>
        <div className='flex-grow px-2'>
          <h2 className='capitalize'>{selectedDoc?.fileName}</h2>
        </div>
      </header>
    </div>
  );
};

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
