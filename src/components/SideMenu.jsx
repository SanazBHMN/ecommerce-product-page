import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import menu from "/images/icon-menu.svg";
import close from "/images/icon-close.svg";
import { content } from "../helpers/Content";

const SideMenu = () => {
  const menuItems = content.navbar;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <img src={menu} />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width="250px">
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            <img src={close} />
          </IconButton>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemText>{item}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideMenu;
