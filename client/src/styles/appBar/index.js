import { List, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez"

//container
export const AppBarContainer = styled(Box) (() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignContent: "center",
    padding: "2px 8px",

}));

//header
export const AppBarHeader = styled(Typography) (() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: "Montez, 'cursive'",
    color: Colors.secondary,
}));

export const HamburgerIcon = styled(MenuIcon)( () => ({
    size: "large",
    color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));