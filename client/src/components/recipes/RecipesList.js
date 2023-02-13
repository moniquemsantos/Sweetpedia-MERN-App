import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

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
          return < RecipeCard key={recipe.id} recipe={recipe}/>;
        })
      )}
    </div>
  );
}
export default RecipesList;
