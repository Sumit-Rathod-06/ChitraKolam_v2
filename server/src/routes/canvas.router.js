import express from "express";
import multer from "multer";
import protect from "../middlewares/auth.middlewares.js";
import { generate } from "../controllers/canvas.controller.js";

const upload = multer(); // memory storage
const image_router = express.Router();

image_router.post(
  "/upload-image",
  protect,
  upload.single("image"), // frontend sends "image"
  generate
);

export default image_router;
