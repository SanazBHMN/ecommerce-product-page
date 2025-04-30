// imports from MUI
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import assets
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min,
  max,
}: QuantitySelectorProps) {
  //   const canIncrease = quantity > min;
  //   const canDecrease = quantity < max;

  const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderRadius: "5px",
    fontWeight: "bold",
  }));

  return (
    <StyledBox>
      <IconButton onClick={onDecrease}>
        <img src={minusIcon} alt="Decrease" />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={onIncrease}>
        <img src={plusIcon} alt="Increase" />
      </IconButton>
    </StyledBox>
  );
}

export default QuantitySelector;
