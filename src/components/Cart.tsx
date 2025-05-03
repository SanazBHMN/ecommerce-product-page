import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
// import assets
import { CartItem } from "../types/types";

const PopupBody = styled("div")(
  ({ theme }) => `
    width: 90vw;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid red;
    background-color: white;
    z-index: 1;
    `
);

interface CartProps {
  id: string | undefined;
  open: boolean | undefined;
  anchor: HTMLElement | null;
  cartItems: CartItem[];
}

function Cart({ id, open, anchor, cartItems }: CartProps) {
  return (
    <BasePopup id={id} open={open} anchor={anchor}>
      <PopupBody>
        {cartItems.length === 0
          ? "Your cart is empty"
          : cartItems.map(({ id, name, price, quantity, totalCost }) => (
              <>{quantity}</>
            ))}
      </PopupBody>
    </BasePopup>
  );
}

export default Cart;
