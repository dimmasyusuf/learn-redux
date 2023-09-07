import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    name: '',
    price: '',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.price = action.payload.price;
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
