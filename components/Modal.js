import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../features/modalSlice';
import {
  addDoc,
  collection,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../db/firebase';
import { useSession } from 'next-auth/react';

const Modal = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const createDocument = async () => {
    if (!input) return;

    await addDoc(collection(db, 'userDocs', session.user.email, 'docs'), {
      fileName: input,
      timestamp: serverTimestamp(),
    });

    dispatch(closeModal());
    setInput('');
  };

  return (
    <Dialog open={true} handler={() => dispatch(openModal())}>
      <DialogBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          className='w-full outline-none'
          placeholder='Enter name of document...'
          onKeyDown={(e) => e.key === 'Enter' && createDocument()}
        />
      </DialogBody>
      <DialogFooter>
        <Button
          variant='text'
          color='blue'
          buttonType='link'
          className='mr-1'
          onClick={() => dispatch(closeModal())}
        >
          Cancel
        </Button>

        <Button variant='gradient' color='blue' onClick={createDocument}>
          Create
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;
