import React from "react";
import { Link } from "react-router-dom";

//  material ui
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

// material icons
import FacebookIcon from "@mui/icons-material/Facebook";

function onPhoneClick() {
  window.open(`tel:+33659526587`);
}

function onEmailClick() {
  window.open(`mailto:adh.solution@outlook.com`);
}

const Footer = () => {
  const theme = useTheme();
  return (
    <Box my={{ xs: 5, sm: 10 }}>
      <Stack spacing={1} mb={1}>
        <Typography component={"h3"}>Contact</Typography>
        <Link style={{ textDecoration: "none" }} onClick={onPhoneClick}>
          06 59 52 65 87
        </Link>
        <Link style={{ textDecoration: "none" }} onClick={onEmailClick}>
          adh.solution@outlook.com
        </Link>
      </Stack>
      <Stack spacing={1} mb={1}>
        <Typography component={"h3"}>Retrouvez nous sur</Typography>
        <Link
          to={"https://www.facebook.com/adhterrassement"}
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon
            sx={{
              fontSize: "30px",
              path: {
                color: "#3b5998",
              },
            }}
          />
        </Link>
      </Stack>
      <Stack spacing={1}>
        <Typography component={"h3"}>
          Création de{" "}
          <Link to={"https://imbertf.fr"} target="_blank" rel="noopener">
            imbertf
          </Link>
          ©️2023
        </Typography>
        <Typography color={theme.palette.primary.light}>
          N'hésitez pas à me contacter sur{" "}
          <Link
            to={"https://imbertf.fr"}
            target="_blank"
            rel="noopener"
            style={{ color: "#ffffff" }}
          >
            imbertf.fr
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
