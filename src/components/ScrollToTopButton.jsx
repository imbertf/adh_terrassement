import React, { useState, useEffect } from "react";

import { Button, styled } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButtonRoot = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ScrollToTopButtonRoot>
      {isVisible && (
        <Button
          variant="contained"
          color="primary"
          onClick={scrollToTop}
          startIcon={<KeyboardArrowUpIcon />}
        ></Button>
      )}
    </ScrollToTopButtonRoot>
  );
};

export default ScrollToTopButton;
