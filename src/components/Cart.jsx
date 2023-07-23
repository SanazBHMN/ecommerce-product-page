import { IconButton } from "@mui/material";
import cart from "../../public/images/icon-cart.svg";

const Cart = () => {
  return (
    <IconButton>
      <img src={cart} alt="" />
    </IconButton>
  );
};

export default Cart;
