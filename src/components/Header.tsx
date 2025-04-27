// imports from MUI
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
  return (
    <Box
      component="header"
      sx={{
        padding: "12px 10px",
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
          <IconButton>
            <img src={menuIcon} alt="" />
          </IconButton>
          <img src={logo} alt="Logo" />
        </Stack>
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
            <CartBadge badgeContent={3} />
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
