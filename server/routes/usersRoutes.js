import express from "express";
import { imageUpload, login, signup } from "../controller/userController.js";
import { multerUpload } from "../middlewares/multer.js";
const router = express.Router();

router.post("/imageUpload", multerUpload.single("image"), imageUpload);
router.post("/signup", signup);
router.post("/login", login);

export default router;
