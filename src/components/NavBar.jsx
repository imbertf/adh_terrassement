// react
import * as React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// material ui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// material icon
import MenuIcon from "@mui/icons-material/Menu";

// images
import Logo from "../medias/logo/logo.webp";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToWithOffset = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ py: "10px" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" color={"red"}>
                  <ScrollLink
                    to="services"
                    onClick={() => {
                      scrollToWithOffset("services");
                      handleCloseNavMenu();
                    }}
                    smooth={true}
                    duration={500}
                  >
                    Services
                  </ScrollLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" color={"red"}>
                  <ScrollLink
                    to="realisations"
                    onClick={() => {
                      scrollToWithOffset("realisations");
                      handleCloseNavMenu();
                    }}
                    smooth={true}
                    duration={500}
                  >
                    Réalisations
                  </ScrollLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" color={"red"}>
                  <ScrollLink
                    to="contact"
                    onClick={() => {
                      scrollToWithOffset("contact");
                      handleCloseNavMenu();
                    }}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </ScrollLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <img src={Logo} alt="logo" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" color={"primary"}>
                <ScrollLink to="services" smooth={true} duration={500}>
                  Services
                </ScrollLink>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" color={"primary"}>
                <ScrollLink to="realisations" smooth={true} duration={500}>
                  Réalisations
                </ScrollLink>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" color={"primary"}>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </Typography>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// const pages = ["Services", "A propos", "Devis"];

// burger
// {/* {pages.map((page) => (
//   <MenuItem key={page} onClick={handleCloseNavMenu}>
//     <Typography textAlign="center" color={"red"}>
//       {page}
//     </Typography>
//   </MenuItem>
// ))} */}

// {
// /* {pages.map((page) => (
//             <Button
//               key={page}
//               onClick={handleCloseNavMenu}
//               sx={{ my: 2, color: "white", display: "block" }}
//             >
//               {page}
//             </Button>
//           ))} */
// }
export default NavBar;
