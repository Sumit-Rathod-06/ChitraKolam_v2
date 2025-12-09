import express from "express";
import cors from "cors";
import axios from "axios";
import auth_router from "./src/routes/auth.router.js";
import generate_router from "./src/routes/generate.router.js";
import image_router from "./src/routes/canvas.router.js";
import analyse_router from "./src/routes/analyse.router.js";
import path from "path";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", auth_router);
app.use("/api/text_to_image", generate_router);
app.use("/api/canvas", image_router);
app.use("/api/analyse", analyse_router);
app.use("/uploads", express.static("uploads"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
