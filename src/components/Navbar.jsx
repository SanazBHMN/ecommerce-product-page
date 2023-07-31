import logo from "/images/logo.svg";
import Profile from "./Profile";
import Cart from "./Cart";
import SideMenu from "./SideMenu";
import { Box, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ p: 2 }}>
      <nav>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            alignItems="baseline"
            justifyContent="flex-start"
            spacing={2}
          >
            <SideMenu />
            <img src={logo} alt="logo" />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Cart />
            <Profile />
          </Stack>
        </Stack>
      </nav>
    </Box>
  );
};

export default Navbar;
