import React from "react";
import { AppBarContainer, AppBarHeader, HamburgerIcon } from "../styles/appBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, Button, InputBase } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";

const pages = [
  { label: "Home", url: "/" },
  { label: "Popular", url: "/#" },
  { label: "Quick and easy", url: "/#" },
];

const settings = [{ label: "Profile", url: "/profile" }];

function AppBar() {
  // TODO Extract this styles to styles folder
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // ------ TODO Extract this ⤴ styles to styles folder ------

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let isLogged = true;

  function handleLogout() {
    console.log("logout");
  }

  return (
    <>
      <AppBarContainer>
        {/* This is the logo for Desktop*/}
        <AppBarHeader
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
          }}
        >
          Sweetpedia
        </AppBarHeader>
        {/* This is the Hamburger menu for Mobile */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleOpenNavMenu}>
            <HamburgerIcon />
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
              display: { xs: "", md: "none" },
            }}
          >
            {pages.map(({ label, url }) => (
              <MenuItem key={label} onClick={handleCloseNavMenu}>
                <Button
                  href={`${url}`}
                  key={`${label}-mobile-nav`}
                  sx={{ mr: 2 }}
                >
                  {label}
                </Button>
                <Typography textAlign="center">{label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/*This is the navigation for Desktop*/}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map(({ label, url }) => (
            <Button href={`${url}`} key={`${label}-nav`} sx={{ mr: 2 }}>
              {label}
            </Button>
          ))}
        </Box>

        {/*This is the search bar for Desktop (Implemented with Material UI https://mui.com/material-ui/react-app-bar/#SearchAppBar.js)*/}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <div
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </Box>

        {/*This is the logo for Mobile*/}
        <AppBarHeader
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
          }}
        >
          Sweetpedia
        </AppBarHeader>

        {/*This is the user menu for Desktop */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
          <div
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ label, url = "", callBack = () => {} }) => (
                <MenuItem key={label} onClick={handleCloseUserMenu}>
                  <Button href={`${url}`} onClick={callBack}>
                    {label}
                  </Button>
                </MenuItem>
              ))}
              {isLogged ? (
                <MenuItem>
                  <Button onClick={handleLogout}>Logout</Button>
                </MenuItem>
              ) : (
                <MenuItem>
                  <Button href="/login">Login</Button>
                </MenuItem>
              )}
            </Menu>
          </div>
        </Box>
      </AppBarContainer>
    </>
  );
}

export default AppBar;
