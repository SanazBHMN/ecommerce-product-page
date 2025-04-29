// imports fro MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CtaButton from "./CtaButton";
import QuantitySelector from "./QuantitySelector";

function Content() {
  return (
    <Box component="main">
      <Stack>
        <Typography variant="h5">Sneaker Company</Typography>
        <Typography variant="h3">Fall Limited Edition Sneakers</Typography>
        <Typography variant="body1">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Typography>
      </Stack>
      <Stack>
        <QuantitySelector />
        <CtaButton />
      </Stack>
    </Box>
  );
}

export default Content;
