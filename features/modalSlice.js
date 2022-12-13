import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIsOpen: false,
  },

  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalIsOpen = (state) => state.modal.modalIsOpen;

export default modalSlice.reducer;
