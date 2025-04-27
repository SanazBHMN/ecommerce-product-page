// imports from MUI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

interface NavLinksProps {
  direction?: "row" | "column"; // Allow flex direction
}

let navLinks = [
  { label: "Collections", path: "/collections" },
  { label: "Women", path: "/women" },
  { label: "Men", path: "/men" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function NavLinks({ direction = "row" }: NavLinksProps) {
  return (
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
          <ListItemButton>
            <ListItemText>
              <Link to={path}>{label}</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default NavLinks;
