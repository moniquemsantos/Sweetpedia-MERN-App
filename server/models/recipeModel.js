import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: false,
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
  // likes: {
  //   type: Number,
  //   required: false,
  // },
  readyIn: {
    type: String,
    required: true,
    unique: false,
  },

  image: {
    type: String,
    // required: true,
    // unique: true,
  },
  postedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});

const recipeModel = mongoose.model("recipe", recipeSchema);

export default recipeModel;
