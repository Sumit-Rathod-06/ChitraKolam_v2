import express from "express";
import cors from "cors";
import axios from "axios";
import auth_router from "./src/routes/auth.router.js";
// import postsRouter from "./src/routes/post.js";
// import commentsRouter from "./src/routes/comment.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", auth_router);
// app.use("/api/posts", postsRouter);
// app.use("/api/comments", commentsRouter);
app.post("/process-image", async (req, res) => {
  try {
    const { image } = req.body;

    // Forward to Flask ML server
    const flaskResponse = await axios.post("http://127.0.0.1:8000/transform", {
      image: image,
    });

    res.json({
      status: "success",
      output: flaskResponse.data.output, // base64 result image
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Processing failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
