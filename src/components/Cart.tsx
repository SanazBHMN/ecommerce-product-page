import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
// imports from MUI
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
// import assets
import { CartItem } from "../types/types";
import CartList from "./CartList";

const PopupBody = styled("div")(
  ({ theme }) => `
    width: 350px;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
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
      <PopupBody sx={{ padding: "0", minHeight: "300px" }}>
        {cartItems.length === 0 ? (
          <>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                padding: "8px 16px",
              }}
            >
              Cart
            </Typography>
            <Divider />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
              }}
            >
              <Typography>Your cart is empty</Typography>
            </CardContent>
          </>
        ) : (
          // cartItems.map(({ id, name, price, quantity, totalCost }) => (
          //   <>{quantity}</>
          // ))
          <CartList />
        )}
      </PopupBody>
    </BasePopup>
  );
}

export default Cart;
