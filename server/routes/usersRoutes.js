import express from "express";
import { imageUpload, login, signup, getProfile } from "../controller/userController.js";
import jwt from "../middlewares/jwt.js";
import { multerUpload } from "../middlewares/multer.js";
const router = express.Router();

router.get("/profile", jwt, getProfile);
router.post("/imageUpload", multerUpload.single("image"), imageUpload);
router.post("/signup", signup);
router.post("/login", login);

export default router;
