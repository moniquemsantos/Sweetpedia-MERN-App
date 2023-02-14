import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

function RecipesList() {
  const [fetchResult, setFetchResult] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTryCatch = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/recipes/all");
        const result = await response.json();
        setFetchResult(result.allRecipes);
      } catch (error) {
        console.log("Catch: ", error);
        setError(error);
      }
    };

    fetchTryCatch();
  }, []);

  console.log("fetchResult: ", fetchResult);

  return (
    <div>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        fetchResult.map((recipe) => {
          return (
            <>
              <Container>
                <Grid
                  item
                  container
                  justifyContent={"center"}
                  sx={{ margin: "20px 4px 10px 4px" }}>
                  
                <RecipeCard key={recipe.id} recipe={recipe} />
              
                </Grid>
              </Container>
            </>
          );
        })
      )}
    </div>
  );
}
export default RecipesList;
