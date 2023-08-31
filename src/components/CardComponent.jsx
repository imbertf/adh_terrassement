// react
import * as React from "react";

// material ui
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function CardComponent({ title, text, icon }) {
  const theme = useTheme();

  const card = (
    <>
      <CardContent>
        <Box>{icon}</Box>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color={theme.palette.primary.light}>
          {text}
        </Typography>
      </CardContent>
    </>
  );

  return (
    <Box
      border={`1px solid ${theme.palette.primary.medium}`}
      width={"275px"}
      m={{ xs: "10px" }}
      sx={{
        transition: "all 0.2s ease",
        "&:hover": {
          background: "#2b1f18ff",
          svg: {
            color: `${theme.palette.text.primary}`,
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          background: "transparent",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          p: "10px 5px",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
