import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIsOpen: false,
    selectedDoc: null,
  },

  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
    selectDoc: (state, action) => {
      state.selectedDoc = action.payload;
    },
  },
});

export const { openModal, closeModal, selectDoc } = modalSlice.actions;

export const selectModalIsOpen = (state) => state.modal.modalIsOpen;

export const selectSelectedDoc = (state) => state.modal.selectedDoc;

export default modalSlice.reducer;
