import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Colors } from "../theme";

export const MainPaper = styled(Paper)(() => ({
  borderStyle: "solid",
  borderColor: Colors.primary,
  boxShadow: "none",
  padding: 20,
  width: "90%",
  height: "fit-content",
  margin: "40px auto",
}));
