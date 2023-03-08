import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { Container, Grid } from "@mui/material";
import { RecipesContext } from "../store/RecipesContext";

function RecipesList() {
  const { fetchResult, error } = useContext(RecipesContext);
  return (
    <>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        <Container sx={{ marginTop: 8, marginBottom: 20 }}>
          <Grid container justifyContent={"center"} spacing={4}>
            {fetchResult.map((recipe) => {
              return (
                <Grid key={recipe._id} item xs={12} sm={6} md={4} lg={3}>
                  <RecipeCard recipe={recipe} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default RecipesList;
