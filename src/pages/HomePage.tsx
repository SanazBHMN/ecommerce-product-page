// import components
import ImageSlider from "../components/imageSlider";
import Content from "../components/Content";
// imports from MUI
import Grid from "@mui/material/Grid";
// hooks
import useScreen from "../hooks/useScreen";

const HomePage = () => {
  const isMobile = useScreen();

  return (
    <Grid
      sx={{
        marginTop: isMobile ? "0" : "5rem",
        padding: isMobile ? "0" : "0 2rem",
      }}
    >
      <ImageSlider />
      <Content />
    </Grid>
  );
};

export default HomePage;
