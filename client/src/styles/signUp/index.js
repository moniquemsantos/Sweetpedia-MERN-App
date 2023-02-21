import { styled } from "@mui/material/styles";
import { Avatar, Button, Paper, TextField } from "@mui/material";
import { Colors } from "../theme";

export const PaperSignUp = styled(Paper)(() => ({
  padding: 20,
  width: 300,
  height: "58vh",
  margin: "40px auto",
}));

export const AvatarStyle = styled(Avatar)(() => ({
    backgroundColor: Colors.secondary,
}));

export const BtnUploadStyle = styled(Button)(() => ({
  margin: "10px 2px",
  backgroundColor: Colors.light_gray
}));

export const BtnSignUpStyle = styled(Button)(() => ({
    margin: "20px 5px",
    backgroundColor: Colors.primary,
  }));

export const LinkStyle = {
  margin: "8px",
};

export const TextFieldImageUpload = styled(TextField)(() => ({
    marginTop: "8px",
  }));
