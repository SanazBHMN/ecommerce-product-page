import { useSelector } from "react-redux";
import { RootState } from "../store";

function CartList() {
  const cartItems = useSelector((state: RootState) => state.cart.data);

  console.log(cartItems);
  return <div>{cartItems.map((item) => item.quantity)}</div>;
}

export default CartList;
