import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const CategoriesContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "30px 0px 30px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: Colors.primary,
}));
