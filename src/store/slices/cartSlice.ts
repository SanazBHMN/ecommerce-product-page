// This slice would manage:
// - Items added to cart
// - Items removed from cart
// - clearCart action
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/types";

interface CartState {
  data: CartItem[];
}

const initialState: CartState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      // Assumption:
      // action.payload === { name: 'ab', price: 1, totalCost: 1}
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalCost += action.payload.totalCost;
      } else {
        state.data.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      // Assumption:
      // action.payload === th id of the item we want to remove
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    clearCart(state, action) {
      // Assumption:
      // reset the state
      state.data = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
