import express from "express";
import { getAllRecipes, addRecipe } from "../controller/recipeController.js";
import jwt from "../middlewares/jwt.js";

const router = express.Router();

router.get("/all", getAllRecipes);
// router.post("/addrecipe", jwt, addRecipe);
router.post("/addrecipe", addRecipe);

export default router;
