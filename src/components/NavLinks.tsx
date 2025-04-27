import { Link } from "react-router-dom";
// imports from MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import assets
import closeIcon from "../assets/images/icon-close.svg";

interface NavLinksProps {
  direction?: "row" | "column"; // Allow flex direction
  onLinkClick?: () => void;
}

let navLinks = [
  { label: "Collections", path: "/collections" },
  { label: "Women", path: "/women" },
  { label: "Men", path: "/men" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function NavLinks({ direction = "row", onLinkClick }: NavLinksProps) {
  return (
    <Box>
      {direction === "column" && (
        <IconButton onClick={onLinkClick}>
          <img src={closeIcon} alt="Close" />
        </IconButton>
      )}
      <List
        sx={{
          display: "flex",
          flexDirection: direction,
          alignItems: direction === "row" ? "center" : "flex-start",
          gap: 2,
        }}
      >
        {navLinks.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton onClick={onLinkClick}>
              <ListItemText>
                <Link to={path}>{label}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default NavLinks;
