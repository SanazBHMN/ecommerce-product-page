import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../store";
// imports fro MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CtaButton from "./CtaButton";
import QuantitySelector from "./QuantitySelector";
import { theme } from "../theme";

function Content() {
  const dispatch = useDispatch();

  const quantity = useSelector((state: any) => state.product.quantity);

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity());
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity());
  };

  return (
    <Box component="main">
      <Stack>
        <Typography
          sx={{
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "bold",
          }}
          variant="h6"
          color={theme.palette.primary.main}
        >
          Sneaker Company
        </Typography>
        <Typography variant="h3" color={theme.palette.text.primary}>
          Fall Limited Edition Sneakers
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Typography>
      </Stack>
      <Stack>
        <QuantitySelector
          quantity={quantity}
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
        />
        <CtaButton isDisabled={quantity <= 0} />
      </Stack>
    </Box>
  );
}

export default Content;
