import React, { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext();

export const RecipesContextProvider = (props) => {
  const [fetched, setFetched] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const searchRecipes = async (searchQuery) => {
    // TODO: Implement a search endpoint in the backend.
    await fetchRecipes();
    const _recipes = [...fetched];
    const results = _recipes.filter((recipe) => {
      return recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setRecipes(results);
  };

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/recipes/all");
      const { allRecipes } = await response.json();
      // TODO: Remove this line after implementing a search endpoint in the backend.
      setFetched(allRecipes);
      setRecipes(allRecipes);
    } catch (error) {
      setError(error);
      console.error("Catch: ", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  console.log("Fetched Recipes: ", recipes);
  return (
    <RecipesContext.Provider value={{ recipes, error, searchRecipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};
