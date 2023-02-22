import React, { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext();

export const RecipesContextProvider = (props) => {
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
    <RecipesContext.Provider value={{ fetchResult, error }}>
      {props.children}
    </RecipesContext.Provider>
  );
};
