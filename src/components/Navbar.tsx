// imports from MUI
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import components
import NavLinks from "./NavLinks";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect screen size

  return <nav>{!isMobile && <NavLinks />}</nav>;
}

export default Navbar;
