import * as React from "react";
import { useTheme } from "@emotion/react";

// material ui
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ImgMediaCard({ image, alt, title, text, link }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: { xs: "250px", lg: "350px" },
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          svg: {
            color: "gold",
          },
        },
      }}
    >
      <CardMedia
        component="img"
        alt={alt}
        height="350"
        image={image}
        sx={{ mb: "20px" }}
      />
      <CardContent sx={{ p: "0px" }}>
        <Typography gutterBottom variant="h6" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color={theme.palette.primary.light}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
