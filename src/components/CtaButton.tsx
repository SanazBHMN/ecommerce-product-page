import { useDispatch, useSelector } from "react-redux";
import { addItem, resetQuantity, RootState } from "../store";
// imports from MUI
import { theme } from "../theme";
import Button from "@mui/material/Button";
// import assets
import cartIcon from "../assets/images/icon-cart.svg";
import { CartItem } from "../types/types";

interface CtaButtonProps {
  isDisabled: boolean;
}

function CtaButton({ isDisabled }: CtaButtonProps) {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.product.quantity);

  const buttonIcon = <img src={cartIcon} />;

  const handleAddToCart = () => {
    if (quantity === 0) return;

    const item: CartItem = {
      id: 1,
      name: "SOME DUMMY PRODUCT NAME",
      price: 123,
      quantity: quantity,
      totalCost: 125 * quantity,
    };

    dispatch(addItem(item));
    dispatch(resetQuantity());
  };

  return (
    <Button
      sx={{
        color: theme.palette.background.paper,
        textTransform: "none",
      }}
      variant="contained"
      startIcon={buttonIcon}
      color="primary"
      onClick={handleAddToCart}
      disabled={isDisabled}
    >
      Add to cart
    </Button>
  );
}

export default CtaButton;
