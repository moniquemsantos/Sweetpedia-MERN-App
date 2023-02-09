import recipeModel from "../models/recipeModel.js";

const getAllRecipes =
    async (req, res) => {
        try {
          const allRecipes = await recipeModel.find({});
          console.log("allRecipes", allRecipes);
          res.status(200).json({
              number: allRecipes.length,
            allRecipes,
          });
        } catch (error) {
          res.status(500).json({
            error,
            msg: "Something went wrong in the server",
          });
        }
     
};
export {getAllRecipes};
