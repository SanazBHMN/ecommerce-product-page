import { useState } from "react";
// imports from MUI
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { badgeClasses, styled } from "@mui/material";
// import assets
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import Navbar from "./Navbar";
import NavDrawer from "./NavDrawer";
import { useSelector } from "react-redux";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: 3px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: red;
  }
`;

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState<boolean>(false);

  const cartItems = useSelector((state) => state.cart.data);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCloseDrawer = () => setOpen(false);

  const handleOpenDrawer = () => setOpen(true);

  return (
    <Box
      component="header"
      sx={{
        padding: "12px 0",
        borderBottom: isMobile === false ? "1px solid gray" : "",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "start",
            alignItems: "baseline",
          }}
        >
          {isMobile && (
            <IconButton onClick={handleOpenDrawer}>
              <img src={menuIcon} alt="" />
            </IconButton>
          )}
          <img src={logo} alt="Logo" />
        </Stack>

        {/* Navbar only shows on desktop */}
        {!isMobile && <Navbar />}

        {isMobile && open && (
          <NavDrawer open={open} onClose={handleCloseDrawer} />
        )}

        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <IconButton>
            <img src={cartIcon} />
            <CartBadge badgeContent={totalItems} />
          </IconButton>
          <IconButton>
            <Avatar
              src={avatar}
              sx={{
                width: 36,
                height: 36,
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
