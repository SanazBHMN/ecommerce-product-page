import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7d1a", // Orange
      light: "#fff2e0", // Pale orange
    },
    secondary: {
      main: "#1d2025", // Very dark blue
    },
    background: {
      default: "#f7f8fd", // Light grayish blue
      paper: "#ffffff", // White
    },
    text: {
      primary: "#1d2025", // Very dark blue
      secondary: "#68707d", // Dark grayish blue
    },
    grey: {
      300: "#b6bcc8", // Grayish blue
    },
  },
});
