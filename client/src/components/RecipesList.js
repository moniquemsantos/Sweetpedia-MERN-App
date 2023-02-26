import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { RecipesContext } from "../store/RecipesContext";

function RecipesList() {
  const { fetchResult, error } = useContext(RecipesContext);
  return (
    <div>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        fetchResult.map((recipe) => {
          return (
            <div key={recipe._id}>
              <Container>
                <Grid
                  item
                  container
                  justifyContent={"center"}
                  sx={{ margin: "20px 4px 10px 4px" }}
                >
                  <RecipeCard recipe={recipe} />
                </Grid>
              </Container>
            </div>
          );
        })
      )}
    </div>
  );
}
export default RecipesList;