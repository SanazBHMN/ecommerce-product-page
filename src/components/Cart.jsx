import { useState } from "react";
import { IconButton } from "@mui/material";
import cart from "/images/icon-cart.svg";
import CartDetails from "./CartDetails";

const Cart = ({ count, title, discounted }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <img src={cart} alt="" />
      </IconButton>
      <CartDetails
        id={id}
        open={open}
        anchorReference="anchorPosition"
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        anchorPosition={{
          top: 80,
          left: 300,
        }}
        count={count}
        title={title}
        discounted={discounted}
      />
    </>
  );
};

export default Cart;
