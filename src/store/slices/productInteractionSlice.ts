// This slice would manage:
// - increase quantity
// - decrease quantity
import { createSlice } from "@reduxjs/toolkit";

const productInteractionSlice = createSlice({
  name: "product",
  initialState: {
    quantity: 0,
  },
  reducers: {
    increaseQuantity(state) {
      state.quantity += 1;
    },
    decreaseQuantity(state) {
      state.quantity -= 1;
    },
    resetQuantity(state) {
      state.quantity = 0;
    },
  },
});

export const { increaseQuantity, decreaseQuantity, resetQuantity } =
  productInteractionSlice.actions;
export const productInteractionReducer = productInteractionSlice.reducer;
