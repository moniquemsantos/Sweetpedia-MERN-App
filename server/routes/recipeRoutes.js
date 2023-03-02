import express from "express";
import {
  getAllRecipes,
  addRecipe,
  imageRecipeUpload,
  updateRecipe,
  getRecipeById,
  getRecipesByCategory,
  deleteRecipe,
} from "../controller/recipeController.js";
import jwt from "../middlewares/jwt.js";
import { multerUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllRecipes);
router.get("/recipe/:id", getRecipeById);
router.get("/:category", getRecipesByCategory);
router.post("/addrecipe", addRecipe);
router.delete("/delete-recipe/:id", deleteRecipe);
router.post(
  "/image-recipe-upload",
  multerUpload.single("image"),
  imageRecipeUpload
);
router.put("/update-recipe/:id", updateRecipe);

export default router;
