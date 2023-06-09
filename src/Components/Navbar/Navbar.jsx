import "../Navbar/Navbar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/zomato.avif";
import { useState } from "react";
import { useEffect } from "react";
const pages = ["Login", "Sign Up"];
const pages2 = "Logout";

function ResponsiveAppBar() {
  const isloggedin = !!localStorage.getItem("email");
  const [session, setSession] = useState(false);
  const log = window.location.pathname; 
  useEffect(() => {
    if (log == "/login") {
      setSession(true);
    } else if (log == "/Signup") {
      setSession(true);
    }
  }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const history = useNavigate();
  const temp = (id) => {
    if (id === 0) {
      login();
      return;
    }
    if (id === 1) {
      signup();
      return;
    } else {
      console.log("helloWorld");
    }
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const login = () => {
    history("/login");
  };

  const signup = () => {
    history("/Signup");
  };

  const logout = () => {
    localStorage.clear();
    history("/");
  };

  return (
    <AppBar position="absolute" className="navbar-d">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className="logoclass"
            src={logo}
            onClick={() => history("/")}
            alt=""
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 145,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

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
              {isloggedin ? (
                <MenuItem key={pages2} onClick={handleCloseNavMenu}> 
                  <Typography textAlign="right">{pages2}</Typography>
                </MenuItem>
              ) : (
                pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="right">{page}</Typography>
                  </MenuItem>
                ))
              )}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {isloggedin ? (
              <Button
                onClick={() => logout()}
                sx={{
                  my: 2,
                  color: session ? "black" : "white",
                  display: "block",
                }}
              >
                {pages2}
              </Button>
            ) : (
              pages.map((page, id) => (
                <Button
                  key={id}
                  onClick={() => temp(id)}
                  sx={{
                    my: 2,
                    color: session ? "black" : "white",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
