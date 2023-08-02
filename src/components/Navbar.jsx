import logo from "/images/logo.svg";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import Profile from "./Profile";
import Cart from "./Cart";
import SideMenu from "./SideMenu";
import { content } from "../helpers/Content";

const Navbar = ({ count, title, discounted }) => {
  const menuItems = content.navbar;
  return (
    <>
      <Box sx={{ p: 2 }}>
        <nav>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
            >
              <Box
                sx={{
                  display: {
                    md: "none",
                  },
                }}
              >
                <SideMenu />
              </Box>
              <img src={logo} alt="logo" />
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <List>
                  <Stack direction="row">
                    {menuItems.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemButton>
                          <ListItemText>{item}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </Stack>
                </List>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Cart count={count} title={title} discounted={discounted} />
              <Profile />
            </Stack>
          </Stack>
        </nav>
      </Box>
    </>
  );
};

export default Navbar;
