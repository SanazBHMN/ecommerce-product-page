import { Stack, Typography } from "@mui/material";
import Discount from "./Discount";

const Price = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row">
        <Typography variant="h5">$125.00</Typography>
        <Discount />
      </Stack>
      <Typography
        color="secondary.dark"
        sx={{ textDecoration: "line-through" }}
      >
        $250.00
      </Typography>
    </Stack>
  );
};

export default Price;
