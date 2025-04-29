// imports from MUI
import Button from "@mui/material/Button";
// import assets
import cartIcon from "../assets/images/icon-cart.svg";

interface CtaButtonProps {
  onButtonClick: () => void;
}

function CtaButton({ onButtonClick }: CtaButtonProps) {
  const buttonIcon = <img src={cartIcon} />;

  return (
    <Button
      variant="contained"
      startIcon={buttonIcon}
      color="secondary"
      onClick={onButtonClick}
    >
      Add to cart
    </Button>
  );
}

export default CtaButton;
