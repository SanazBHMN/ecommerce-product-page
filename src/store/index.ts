import { configureStore } from "@reduxjs/toolkit";
import {
  cartReducer,
  addItem,
  removeItem,
  clearCart,
} from "./slices/cartSlice";
import {
  productInteractionReducer,
  increaseQuantity,
  decreaseQuantity,
} from "./slices/productInteractionSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    quantity: productInteractionReducer,
  },
});

export {
  store,
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
};
