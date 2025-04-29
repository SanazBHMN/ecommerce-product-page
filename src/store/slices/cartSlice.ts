// This slice would manage:
// - Items added to cart
// - Items removed from cart
// - clearCart action
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addItem(state, action) {
      // Assumption:
      // action.payload === { name: 'ab', price: 1, totalCost: 1}
    },
    removeItem(state, action) {
      // Assumption:
      // action.payload === th id of the item we want to remove
    },
    clearCart(state, action) {
      // Assumption:
      // reset the state
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
