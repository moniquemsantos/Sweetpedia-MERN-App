import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import AppBar from "../components/AppBar";
import { getToken } from "../utils/getToken";
import Footer from "../components/Footer";
import { AvatarStyle, BtnStyle, PaperLogin } from "../styles/Login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

function Login() {
  const [loginUser, setLoginUser] = useState({});

  const handleInputChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    // TODO: validation
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginUser.email);
    urlencoded.append("password", loginUser.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.token) {
          console.log(result.token);
          localStorage.setItem("token", result.token);
          setLoginUser(result.user);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoginUser(null);
  };
  useEffect(() => {
    const token = getToken();

    if (token) {
      console.log("LOGGED IN");
    } else {
      console.log("NOT logged in");
    }
  }, [loginUser]);

  const linkStyle = {
    margin: "8px",
  };

  return (
    <>
      <Grid>
        <AppBar />
        <button style={{ backgroundColor: "red" }} onClick={logout}>
          logout
        </button>

        <PaperLogin>
          <Grid align="center">
            <AvatarStyle>
              <LockOutlinedIcon />
            </AvatarStyle>
            <h2>Login</h2>
          </Grid>
          <TextField
            variant="standard"
            label="email"
            name="email"
            id="email"
            fullWidth
            required
            onChange={handleInputChange}
          />

          <TextField
            variant="standard"
            label="password"
            type="password"
            name="password"
            fullWidth
            required
            onChange={handleInputChange}
          />

          <BtnStyle onClick={login} type="submit" variant="contained" fullWidth>
            Login
          </BtnStyle>

          <Typography>
            {" "}
            Do you have an account?
            <Link to="/signup" style={linkStyle}>
              Sign Up
            </Link>
          </Typography>
        </PaperLogin>
      </Grid>
      <Footer />
    </>
  );
}

export default Login;
