// react
import React from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.css";

// app
import App from "./App";

// material ui
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// theme porvider
import Theme from "./theme/Theme";
import ScrollToTopButton from "./components/ScrollToTopButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
      <ScrollToTopButton />
    </ThemeProvider>
  </React.StrictMode>
);
