import { Box, Typography } from "@mui/material";

const ProductDescription = () => {
  return (
    <>
      <Typography
        variant="subtitle2"
        color="primary"
        style={{ fontWeight: "bold" }}
      >
        SNEAKER COMPANY
      </Typography>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginTop: 9, marginBottom: 9 }}
      >
        Fall Limited Edition Sneakers
      </Typography>
      <Typography color="secondary.dark" paragraph>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Typography>
    </>
  );
};

export default ProductDescription;
