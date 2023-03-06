import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import HomePage from "./views/Home";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import { RecipesContextProvider } from "./store/RecipesContext";
import { AuthContextProvider } from "./store/AuthContext";
import MyRecipes from "./views/MyRecipes";
import FormSubmitRecipe from "./views/SubmitRecipe";
import MyProfile from "./views/MyProfile";
import RecipeDetails from "./views/RecipeDetails";

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
              <Route path="myprofile" element={<MyProfile />} />
              <Route path="myrecipes" element={<MyRecipes />} />
              <Route path="formrecipe" element={<FormSubmitRecipe />} />
              <Route path="recipedetails/:id" element={<RecipeDetails />} />
            </Routes>
          </RecipesContextProvider>
        </AuthContextProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
