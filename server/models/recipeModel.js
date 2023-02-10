import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    unique: false,
  },
  readyInMinutes: {
    type: String,
    required: true,
    unique: false,
  },
  ingredients: {
    type: String,
    required: true,
    unique: false,
  },
  instructions: {
    type: String,
    required: true,
    unique: false,
  },
  likes: {
    type: Number,
    required: false,
  },
});

const recipeModel = mongoose.model("recipe", recipeSchema);

export default recipeModel;
