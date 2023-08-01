import { Typography } from "@mui/material";

const ProductDescription = ({ title, description }) => {
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
        {title}
      </Typography>
      <Typography color="secondary.dark" paragraph>
        {description}
      </Typography>
    </>
  );
};

export default ProductDescription;
