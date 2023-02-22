import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import HomePage from "./views/Home";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Profile from "./views/Profile";
import { RecipesContextProvider } from "./store/RecipesContext";
import { AuthContextProvider } from "./store/AuthContext";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <AuthContextProvider>
          <RecipesContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </RecipesContextProvider>
        </AuthContextProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
