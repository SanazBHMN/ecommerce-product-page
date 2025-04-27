// imports from MUI
import Drawer from "@mui/material/Drawer";
// import components
import NavLinks from "./NavLinks";

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

function NavDrawer({ open, onClose }: NavDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 250,
          },
        },
      }}
    >
      <NavLinks direction="column" onLinkClick={onClose} />
    </Drawer>
  );
}

export default NavDrawer;
