import express from "express";
import {
  getAllRecipes,
  addRecipe,
  imageRecipeUpload,
  updateRecipe,
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
router.put("/update-recipe/:id", updateRecipe);

export default router;
