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
  readyIn: {
    type: String,
    required: true,
    unique: false,
  },
});

const recipeModel = mongoose.model("recipe", recipeSchema);

export default recipeModel;
