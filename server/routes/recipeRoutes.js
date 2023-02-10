import express from "express";
import { getAllRecipes } from "../controller/recipeController.js";

const router = express.Router();

router.get("/all", getAllRecipes);

export default router;
