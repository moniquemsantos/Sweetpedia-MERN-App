import recipeModel from "../models/recipeModel.js";

const getAllRecipes = async (req, res) => {
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

const addRecipe = async (req, res) => {
  console.log("req.body>> ", req.body);

  const newRecipe = new recipeModel({
    title: req.body.title,
    category: req.body.category,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    readyIn: req.body.readyIn,
    // image: req.body.image,
  });
  console.log("newRecipe :>> ", newRecipe);
  try {
    const savedRecipe = await newRecipe.save();

    console.log("savedRecipe :>> ", savedRecipe);
    res.status(200).json(savedRecipe);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    res.status(500).json({
      msg: "Something went wrong",
      error:err
    });
  }
};

export { getAllRecipes, addRecipe };
