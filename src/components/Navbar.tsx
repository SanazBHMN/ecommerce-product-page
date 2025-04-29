// import components
import NavLinks from "./NavLinks";
import useScreen from "../hooks/useScreen";

function Navbar() {
  const isMobile = useScreen();

  return <nav>{!isMobile && <NavLinks />}</nav>;
}

export default Navbar;
