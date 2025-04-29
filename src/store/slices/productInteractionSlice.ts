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
    increaseQuantity(state, action) {
      state.quantity += 1;
    },
    decreaseQuantity(state, action) {
      state.quantity -= 1;
    },
  },
});

export const { increaseQuantity, decreaseQuantity } =
  productInteractionSlice.actions;
export const productInteractionReducer = productInteractionSlice.reducer;
