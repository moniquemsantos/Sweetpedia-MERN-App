import express from "express";
import {
  getAllRecipes,
  addRecipe,
  imageRecipeUpload,
} from "../controller/recipeController.js";
import jwt from "../middlewares/jwt.js";
import { multerUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllRecipes);
// router.post("/addrecipe", jwt, addRecipe);
router.post("/addrecipe", addRecipe);
router.post(
  "/image-recipe-upload",
  multerUpload.single("image"),
  imageRecipeUpload
);

export default router;
