import { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Typography } from "@mui/material";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import { AvatarStyle, BtnStyle, PaperLogin } from "../styles/Login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../store/AuthContext";

function Login() {
  const { login, logout, handleInputChange } = useContext(AuthContext);

  return (
    <>
      <Grid>
        <AppBar />
        <button onClick={logout} style={{ backgroundColor: "red" }}>
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
            <Link to="/signup" style={{ margin: "8px" }}>
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
