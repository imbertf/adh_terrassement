// react
import React, { useState } from "react";

// material ui
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Contact = () => {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  // Allow user to send a new message
  const handleReset = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <Box className="successMsgContent">
        <Box className="successMsgContent-txt">
          <Typography variant="h2">Merci !</Typography>
          <Typography variant="body1">
            Je reviens rapidement vers vous.
          </Typography>

          <Button variant="contained" color="primary" onClick={handleReset}>
            Nouveau message
          </Button>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      component="form"
      action="https://public.herotofu.com/v1/5e1326d0-4760-11ee-ac97-dda96a2aa48a"
      method="post"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
      width={"100%"}
      minWidth={"50%"}
      mb={5}
    >
      <Stack spacing={5}>
        <TextField
          label="Nom"
          name="Name"
          id="name"
          variant="outlined"
          required
          autoComplete="true"
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main, // Change the label color using the theme
            },
          }}
          InputProps={{
            sx: {
              backgroundColor: theme.palette.text.primary, // Change the background color
              borderRadius: "0px",
              color: theme.palette.primary.main,
            },
          }}
        />
        <TextField
          label="Email"
          name="Email"
          id="email"
          type="email"
          variant="outlined"
          required
          autoComplete="true"
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main, // Change the label color using the theme
            },
          }}
          InputProps={{
            sx: {
              backgroundColor: theme.palette.text.primary, // Change the background color
              borderRadius: "0px",
              color: theme.palette.primary.main,
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          id="message"
          multiline
          rows={4}
          variant="outlined"
          required
          autoComplete="true"
          InputLabelProps={{
            style: {
              color: theme.palette.primary.main, // Change the label color using the theme
            },
          }}
          InputProps={{
            sx: {
              backgroundColor: theme.palette.text.primary, // Change the background color
              borderRadius: "0px",
              color: theme.palette.primary.main,
            },
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ borderRadius: 0 }}
        >
          Obtenir un devis
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
