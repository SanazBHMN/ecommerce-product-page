import { Popover } from "@mui/material";

const CartDetails = ({ id, open, anchorEl, onClose, anchorOrigin }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      Popover
    </Popover>
  );
};

export default CartDetails;
