import { Box } from "@mui/material";
import Count from "./Count";
import Price from "./Price";
import ProductDescription from "./ProductDescription";

const MainContent = () => {
  return (
    <Box sx={{ p: 2 }}>
      <ProductDescription />
      <Price />
      <Count />
    </Box>
  );
};

export default MainContent;
