import { Box } from "@mui/material";
import Count from "./Count";
import Price from "./Price";
import ProductDescription from "./ProductDescription";
import ActionButton from "./ActionButton";

const MainContent = () => {
  return (
    <Box sx={{ p: 2 }}>
      <ProductDescription />
      <Price />
      <Count />
      <ActionButton />
    </Box>
  );
};

export default MainContent;
