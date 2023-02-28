import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userPicture: {
    type: String,
  },
  postedRecipe:[{type: mongoose.Schema.Types.ObjectId, ref:"user"}],
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
