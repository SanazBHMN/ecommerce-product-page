import { Link } from "react-router-dom";

// imports from MUI
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function Navbar() {
  return (
    <Box>
      <nav>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText>
                <Link to="/collections">Collections</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>
                <Link to="/women">Women</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>
                <Link to="/men">Men</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>
                <Link to="/about">About</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>
                <Link to="/contact">Contact</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default Navbar;
