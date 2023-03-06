import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import Details from "../components/Details";
import Footer from "../components/Footer";
import { RecipesContext } from "../store/RecipesContext";

function RecipeDetails() {
  const { fetchResult } = useContext(RecipesContext);
  const { id } = useParams();
  const recipe = fetchResult.find((_recipe) => _recipe?._id === id);

  const getFormattedIngredients = (ingredients) => {
    return ingredients ? ingredients.split("\n") : [];
  };
  return (
    <div>
      <AppBar />
      <Details
        recipe={recipe}
        formattedIngredients={getFormattedIngredients(recipe?.ingredients)}
      />
      <Footer />
    </div>
  );
}

export default RecipeDetails;
