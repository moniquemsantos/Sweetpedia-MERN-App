import recipeModel from "../models/recipeModel.js";
import { v2 as cloudinary } from "cloudinary";

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

const imageRecipeUpload = async (req, res) => {
  console.log("req>>>", req.file);
  try {
    const recipePictureUpload = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "recipe-image",
      }
    );
    console.log("reciperecipePictureUpload", recipePictureUpload);
    res.status(200).json({
      msg: "Good Job, your image was uploaded!",
      recipePicture: recipePictureUpload.url,
    });
  } catch (error) {
    res.status(400).json({ msg: "Sorry the upload went wrong" });
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
    image: req.body.image,
  });
  console.log("newRecipe :>> ", newRecipe);
  try {
    const savedRecipe = await newRecipe.save();

    console.log("savedRecipe :>> ", savedRecipe);
    return res.status(200).json(savedRecipe);
  } catch (err) {
    console.log("err.message :>> ", err.message);
    return res.status(500).json({
      msg: "Something went wrong",
      error: err,
    });
  }
};

const updateRecipe = async (req, res) => {
  

  try {
    const postUpdateRecipe = recipeModel.findById(req.params.id);
      if (postUpdateRecipe.userId===req.body.userId)
      {
        await postUpdateRecipe.updateOne({$set:req.body});
          return res.status(200).json("Recipe has been updated")
      }
      else{
        return res.status(400).json("You can only update your post");
      }
  } catch (error) {}
};

export { getAllRecipes, addRecipe, imageRecipeUpload, updateRecipe };
