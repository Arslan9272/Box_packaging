// src/features/imageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedImage: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { setSelectedImage } = imageSlice.actions;

export default imageSlice.reducer;
