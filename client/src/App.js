import React from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import AppBar from "./components/appBar/AppBar";
import Banner from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import RecipesList from "./components/recipes/RecipesList";


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
        <AppBar />
        <Banner />
        <Categories />
        <RecipesList/>
      </Container>
    </ThemeProvider>
  );
}

export default App;

// const fetchData = async () => {
//   const response = await fetch("http://localhost:5000/api/recipes/all");
//   const data = await response.json();
//   console.log(data);
// };

// useEffect(() => {
//   fetchData();
// }, []);

// return (
//   <div className="App">
//     <h1>Sweetpedia</h1>
//   </div>
// );
