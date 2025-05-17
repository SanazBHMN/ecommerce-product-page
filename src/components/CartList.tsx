import { useSelector } from "react-redux";
import { RootState } from "../store";
// imports from MUI

function CartList() {
  const cartItems = useSelector((state: RootState) => state.cart.data);

  return <div>{cartItems.map((item) => item.quantity)}</div>;
}

export default CartList;
