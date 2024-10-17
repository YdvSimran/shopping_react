import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const getItemsSelector = (state) => state.cart;


export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
