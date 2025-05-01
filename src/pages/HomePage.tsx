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
      container
      sx={{
        width: isMobile ? "100%" : "90vw",
        margin: "0 auto",
        marginTop: isMobile ? "0" : "5rem",
        padding: isMobile ? "0" : "0 2rem",
      }}
      columns={{
        sm: 1,
        md: 2,
      }}
      spacing={3}
    >
      <Grid
        size={!isMobile && "grow"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ImageSlider />
      </Grid>
      <Grid size={!isMobile && "grow"}>
        <Content />
      </Grid>
    </Grid>
  );
};

export default HomePage;
