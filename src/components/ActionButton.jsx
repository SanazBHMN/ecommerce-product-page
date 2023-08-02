import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import cart from "/images/icon-cart.svg";

const BootstrapButton = styled(Button)({
  width: "100%",
  display: "block",
  textTransform: "none",
  fontWeight: "bold",
  color: "white",
  "&:hover": {
    backgroundColor: "",
  },
});

const ActionButton = () => {
  return (
    <BootstrapButton variant="contained" disableElevation>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <img src={cart} style={{ color: "white" }} />
        <span>Add to cart</span>
      </Stack>
    </BootstrapButton>
  );
};

export default ActionButton;
