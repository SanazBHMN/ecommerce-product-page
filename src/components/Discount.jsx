import { Typography } from "@mui/material";

const Discount = ({ discountPercentage }) => {
  return (
    <Typography
      variant="body1"
      color="primary.main"
      sx={{ bgcolor: "primary.light", padding: "1px 8px", borderRadius: "5px" }}
    >
      {discountPercentage}%
    </Typography>
  );
};

export default Discount;
