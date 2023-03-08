import { List, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/carattere";

//container
export const AppBarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignContent: "center",
    padding: "2px 8px",
  }));

//header
export const AppBarHeader = styled(Typography)(() => ({
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  padding: "4px",
  fontSize: "4em",
  fontFamily: "Carattere, 'cursive'",
  color: Colors.secondary,
}));

export const HamburgerIcon = styled(MenuIcon)(() => ({
  size: "large",
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));
