import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { images } from "../helpers/CarouselData";

const CartDetails = ({
  id,
  open,
  anchorReference,
  anchorEl,
  onClose,
  anchorOrigin,
  anchorPosition,
  count,
  title,
  discounted,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorReference={anchorReference}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      anchorPosition={anchorPosition}
    >
      <Box
        sx={{
          width: 600,
        }}
      >
        <Typography variant="subtitle2" p={2}>
          Cart
        </Typography>
      </Box>
      <Divider variant="middle" />
      <List>
        {count > 0 ? (
          <ListItem>
            <ListItemButton>
              <img
                src={images[0].thumbnail}
                width={60}
                style={{
                  borderRadius: "5px",
                }}
              />
              <Stack direction="column">
                <ListItemText>{title}</ListItemText>
                <ListItemText>
                  ${discounted} x {count} <span>${discounted * count}.00</span>
                </ListItemText>
              </Stack>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        ) : (
          <Typography>Your cart is empty</Typography>
        )}
      </List>
    </Popover>
  );
};

export default CartDetails;
