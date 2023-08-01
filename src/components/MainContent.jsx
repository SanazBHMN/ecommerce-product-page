import { Box } from "@mui/material";
import Count from "./Count";
import Price from "./Price";
import ProductDescription from "./ProductDescription";
import ActionButton from "./ActionButton";

const MainContent = ({
  count,
  increaseCount,
  decreaseCount,
  title,
  description,
  original,
  discounted,
  discountPercentage,
}) => {
  return (
    <Box sx={{ p: 2 }}>
      <ProductDescription title={title} description={description} />
      <Price
        original={original}
        discounted={discounted}
        discountPercentage={discountPercentage}
      />
      <Count
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
      <ActionButton />
    </Box>
  );
};

export default MainContent;
