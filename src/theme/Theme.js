import { createTheme } from "@mui/material/styles";

// black: #161417ff;
// lightGray: #a3afabff;
// darkGray: #393a37ff;
// red: #de1012ff;
// brown: #2b1f18ff;

const theme = createTheme({
  palette: {
    primary: {
      light: "#a3afabff",
      main: "#161417ff",
      dark: "#2b1f18ff",
    },
    secondary: {
      main: "#de1012ff",
    },
    background: {
        default: '#161417ff',
      },
      text: {
        primary: '#ffffff',
      },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "inherit",
          boxShadow: "none",
          color: "primary",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          color: "primary",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;