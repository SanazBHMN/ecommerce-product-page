import { Outlet } from "react-router-dom";
// imports from MUI
import Container from "@mui/material/Container";

import Header from "../components/Header";

const Root = () => {
  return (
    <Container
      sx={{
        padding: 0,
      }}
    >
      <Header />
      <Outlet />
    </Container>
  );
};

export default Root;
