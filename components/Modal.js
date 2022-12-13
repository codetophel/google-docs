import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../features/modalSlice';

const Modal = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const createDocument = () => {
    console.log('docs');
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
