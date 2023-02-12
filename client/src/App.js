import React from "react";
import { useEffect } from "react";
import { Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import AppBar from "./components/appBar/AppBar";

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
        <Button variant="contained"> Test</Button>
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
