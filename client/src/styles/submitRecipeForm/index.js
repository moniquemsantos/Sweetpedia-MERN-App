import { styled } from "@mui/material/styles";
import { Paper, Button } from "@mui/material";
import { Colors } from "../theme";

export const PaperRecipeForm = styled(Paper)(() => ({
  padding: 20,
  width: "1100px",
  margin: "40px auto",
}));

export const BtnStyle = styled(Button)(() => ({
  margin: "8px 0",
  backgroundColor: Colors.primary,
}));
