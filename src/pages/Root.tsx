import { Outlet } from "react-router-dom";
// import components
import Header from "../components/Header";
// imports from MUI
import Stack from "@mui/material/Stack";
// hooks
import useScreen from "../hooks/useScreen";

const Root = () => {
  const isMobile = useScreen();

  return (
    <Stack
      sx={{
        width: isMobile ? "100%" : "90%",
        margin: "0 auto",
      }}
    >
      <Header />
      <Outlet />
    </Stack>
  );
};

export default Root;
