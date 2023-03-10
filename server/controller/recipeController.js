import recipeModel from "../models/recipeModel.js";
import { v2 as cloudinary } from "cloudinary";

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await recipeModel
      .find({})
      .populate({ path: "postedBy", select: ["userName", "userPicture"] });

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

const getRecipesByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const requestedRecipes = await recipeModel.find({ category: category });
    if (requestedRecipes.length === 0) {
      res.status(200).json({
        msg: "No recipes with that category code in our DB",
      });
    } else {
      res.status(200).json({
        number: requestedRecipes.length,
        requestedRecipes,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
};

const getRecipeById = async (req, res) => {
  console.log("req>>>", req);
  const { id } = req.params;

  try {
    const recipeById = await recipeModel
      .find({ _id: id })
      .populate({ path: "postedBy", select: ["userName", "userPicture"] });
    if (recipeById.length === 0) {
      res.status(200).json({
        msg: "No recipe with that id in our DB",
      });
    } else {
      res.status(200).json({
        number: recipeById.length,
        recipeById,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
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

const deleteRecipe = async (req, res) => {
  console.log("req>>>>", req);
  const recipeId = req.params.id;
  console.log(recipeId);
  try {
    const recipe = await recipeModel.findOne({ _id: recipeId });
    if (!recipe) {
      return res.status(404).json({ msg: "The recipe was not found" });
    }
    await recipeModel.findByIdAndDelete({ _id: recipeId });
    res.status(200).json({ msg: "Your recipe was deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
};

const updateRecipe = async (req, res) => {
  console.log("req.body>> ", req.body);
  try {
    const postUpdateRecipe = recipeModel.findById(req.params.id);
    console.log("postUpdateRecipe", postUpdateRecipe);
    if (postUpdateRecipe.userId === req.body.userId) {
      await postUpdateRecipe.updateOne({ $set: req.body });
      return res.status(200).json("Recipe has been updated");
    } else {
      return res.status(400).json("You can only update your post");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export {
  getAllRecipes,
  addRecipe,
  deleteRecipe,
  imageRecipeUpload,
  updateRecipe,
  getRecipeById,
  getRecipesByCategory,
};
