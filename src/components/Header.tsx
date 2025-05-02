import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
// imports from MUI
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Cart from "./Cart";
import { badgeClasses, styled } from "@mui/material";
// import assets
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import Navbar from "./Navbar";
import NavDrawer from "./NavDrawer";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: 3px;
    padding-left: 10px;
    padding-right: 10px;
    color: white;
    font-weight: bold;
  }
`;

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState<boolean>(false);
  // const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.data);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // handle drawer
  const handleCloseDrawer = () => setOpen(false);

  const handleOpenDrawer = () => setOpen(true);

  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const cartopen = Boolean(anchor);
  // handle cart
  const popupId = cartopen ? "simple-popper" : undefined;
  const handleCartClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

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
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
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
          <IconButton onClick={handleCartClick}>
            <img src={cartIcon} />
            <CartBadge badgeContent={totalItems} color="primary" />
          </IconButton>
          {cartopen && <Cart id={popupId} open={cartopen} />}
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
