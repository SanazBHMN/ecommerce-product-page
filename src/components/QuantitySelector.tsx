// imports from MUI
import Box from "@mui/material/Box";
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

  return (
    <Box>
      <IconButton onClick={onDecrease}>
        <img src={minusIcon} alt="Decrease" />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={onIncrease}>
        <img src={plusIcon} alt="Increase" />
      </IconButton>
    </Box>
  );
}

export default QuantitySelector;
