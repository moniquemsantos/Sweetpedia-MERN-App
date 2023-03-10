import { useState } from "react";
import {
  AvatarStyle,
  PaperSignUp,
  TextFieldImageUpload,
  BtnUploadStyle,
  BtnSignUpStyle,
} from "../styles/signUp";
import { Grid, TextField, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

function SignUp() {
  // Check email format, password lenght ...avoid making useless requests to the server
  const [selectFile, setSelectFile] = useState(null);
  const [newUser, setNewUser] = useState({});

  const handleAttachPicture = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const submitPicture = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", selectFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://localhost:5000/api/users/imageUpload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setNewUser({ ...newUser, userPicture: result.userPicture });
      })
      .catch((error) => console.log("error", error));
  };

  const handleInputChange = (e) => {
    //console.log("e.target.name, e.target.value", e.target.name, e.target.value);
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const signUp = async () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);
    urlencoded.append(
      "userPicture",
      newUser.userPicture
        ? newUser.userPicture
        : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
    );
    var requestOptions = {
      method: "POST",
      body: urlencoded,
    };

    fetch("http://localhost:5000/api/users/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Grid>
        <AppBar />
        <PaperSignUp>
          <Grid align="center">
            <AvatarStyle>
              <AddCircleOutlineOutlinedIcon />
            </AvatarStyle>
            <h2>Sign up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account
            </Typography>
          </Grid>
          <TextField
            fullWidth
            variant="standard"
            type="text"
            name="userName"
            label="User Name"
            placeholder="Enter your username"
            id="userName"
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            variant="standard"
            type="text"
            name="email"
            label="email"
            placeholder="Enter your Email"
            id="email"
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            variant="standard"
            type="password"
            name="password"
            label="password"
            placeholder="Enter your password"
            id="password"
            onChange={handleInputChange}
          />
          <TextFieldImageUpload
            fullWidth
            variant="standard"
            type="file"
            name="file"
            onChange={handleAttachPicture}
          />
          <BtnUploadStyle
            type="submit"
            variant="contained"
            size="small"
            onClick={submitPicture}
          >
            Upload
          </BtnUploadStyle>

          <BtnSignUpStyle
            fullWidth
            type="submit"
            variant="contained"
            onClick={signUp}
          >
            Sign Up
          </BtnSignUpStyle>
        </PaperSignUp>
      </Grid>
      <Footer />
    </>
  );
}

export default SignUp;
