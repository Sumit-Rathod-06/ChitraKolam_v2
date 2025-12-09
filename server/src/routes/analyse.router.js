import express from "express";
import multer from "multer";
import protect from "../middlewares/auth.middlewares.js";
import {uploadAndAnalyse} from "../controllers/analyse.controller.js";

const upload = multer({ dest: "uploads/" });
const analyse_router = express.Router();
analyse_router.post(
  "/upload",
  protect,
  upload.single("image"), // frontend sends "image"
  uploadAndAnalyse
);
export default analyse_router;