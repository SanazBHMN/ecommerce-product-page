import { Outlet } from "react-router-dom";
// import components
import Header from "../components/Header";
// imports from MUI
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import Stack from "@mui/material/Stack";
// hooks
import useScreen from "../hooks/useScreen";

const Root = () => {
  const isMobile = useScreen();

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          width: isMobile ? "100%" : "90%",
          margin: "0 auto",
        }}
      >
        <Header />
        <Outlet />
      </Stack>
    </ThemeProvider>
  );
};

export default Root;
