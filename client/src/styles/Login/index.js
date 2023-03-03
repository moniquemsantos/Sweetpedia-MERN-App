import { styled } from "@mui/material/styles";
import { Avatar, Button, Paper } from "@mui/material";
import { Colors } from "../theme";

export const PaperLogin = styled(Paper)(() => ({
  padding: 20,
  width: 300,
  height: "52vh",
  margin: "40px auto",
}));

export const AvatarStyle = styled(Avatar)(() => ({
    backgroundColor: Colors.secondary,
}));

export const BtnStyle = styled(Button)(() => ({
  margin: "8px 0",
  backgroundColor: Colors.primary,
  color: "white"
}));

export const LinkStyle = {
  margin: "8px",
};
