import express from "express";
import { signup } from "../controller/userController.js";
import { imageUpload } from "../controller/userController.js";
import { multerUpload } from "../middlewares/multer.js";
const router = express.Router();

router.post("/imageUpload", multerUpload.single("image"), imageUpload);
router.post("/signup", signup);

export default router;