import { useState } from "react";
import { Badge } from "@mui/material";
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
      <Badge
        badgeContent={3}
        color="primary"
        aria-describedby={id}
        onClick={handleClick}
      >
        <img src={cart} />
      </Badge>
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
