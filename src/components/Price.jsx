import { Stack, Typography } from "@mui/material";
import Discount from "./Discount";

const Price = ({ original, discounted, discountPercentage }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row">
        <Typography variant="h5">${discounted}</Typography>
        <Discount discountPercentage={discountPercentage} />
      </Stack>
      <Typography
        color="secondary.dark"
        sx={{ textDecoration: "line-through" }}
      >
        ${original}
      </Typography>
    </Stack>
  );
};

export default Price;
