import { Typography } from "@mui/material";

const Discount = () => {
  return (
    <Typography
      variant="body1"
      color="primary.main"
      sx={{ bgcolor: "primary.light", padding: "1px 8px", borderRadius: "5px" }}
    >
      50%
    </Typography>
  );
};

export default Discount;
