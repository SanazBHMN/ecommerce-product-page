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
  resetQuantity,
} from "./slices/productInteractionSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productInteractionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  store,
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  resetQuantity,
};
