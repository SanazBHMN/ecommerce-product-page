import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "hsl(25, 100%, 94%)",
      main: "hsl(26, 100%, 55%)",
    },
    secondary: {
      light: "hsl(223, 64%, 98%)",
      main: "hsl(220, 14%, 75%)",
      dark: "hsl(219, 9%, 45%)",
      darker: "hsl(220, 13%, 13%)",
    },
  },
});

export default theme;
