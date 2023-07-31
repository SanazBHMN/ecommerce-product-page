// import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Box sx={{ p: "1rem" }}>
        <Navbar />
      </Box>
      <Carousel />
    </>
  );
}

export default App;
