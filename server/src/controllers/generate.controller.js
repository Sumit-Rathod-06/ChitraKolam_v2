import axios from "axios";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import pool from "../config/db.js";

// ✅ NGROK URL
const API_URL = "https://unhealing-anibal-stocky.ngrok-free.dev/generate";

// POST /api/text_to_image/generate
export const generate = async (req, res) => {
  try {
    console.log("Generate Request Body:", req.body);
    console.log("User Info:", req.user);
    const userId = req.user.id;

    const {
        sessionId,
      prompt,
      negative_prompt = "blur, distortion, messy lines",
      steps = 30,
      guidance = 7.5,
    } = req.body;
    console.log("Parameters:", { sessionId, prompt, negative_prompt, steps, guidance });

    if (!prompt || !sessionId) {
      return res.status(400).json({
        success: false,
        message: "Prompt and sessionId are required",
      });
    }

    // ✅ 1. Save prompt in DB
    const promptResult = await pool.query(
      `INSERT INTO prompts (session_id, prompt_text, model_name)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [sessionId, prompt, "stable-diffusion"]
    );

    const promptId = promptResult.rows[0].id;
    console.log("Saved Prompt ID:", promptId);
    // ✅ 2. Send request to NGROK ML server
    const response = await axios.post(API_URL, {
      prompt,
      negative_prompt,
      steps,
      guidance,
    });
    console.log("ML Server Response:", response.data);
    if (!response.data.base64) {
      return res.status(500).json({
        success: false,
        message: "Invalid response from ML server",
      });
    }

    // ✅ 3. Convert Base64 to Image
    const imageBuffer = Buffer.from(response.data.base64, "base64");
    const imageName = `${uuidv4()}.png`;

    const uploadDir = path.join("uploads", "generated");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const imagePath = path.join(uploadDir, imageName);
    fs.writeFileSync(imagePath, imageBuffer);

    const imageUrl = `http://localhost:5000/uploads/generated/${imageName}`;


    // ✅ 4. Save image info in DB
    const imageResult = await pool.query(
      `INSERT INTO generated_images (prompt_id, image_url)
       VALUES ($1, $2)
       RETURNING id, image_url`,
      [promptId, imageUrl]
    );

    // ✅ 5. Return response to frontend
    return res.status(200).json({
  success: true,
  imageUrl: imageUrl
});
  } catch (error) {
    console.error("Generate Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Image generation failed",
    });
  }
};

export const createSession = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title } = req.body;

    const result = await pool.query(
      `INSERT INTO sessions (user_id, title)
       VALUES ($1, $2)
       RETURNING id, title, created_at`,
      [userId, title]
    );

    res.status(201).json({
      success: true,
      session: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

export const getSessions = async (req, res) => {
  const userId = req.user.id;

  const result = await pool.query(
    `SELECT id, title FROM sessions
     WHERE user_id = $1
     ORDER BY created_at DESC`,
    [userId]
  );

  res.json(result.rows);
};

export const getSessionHistory = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    `SELECT p.prompt_text, i.image_url
     FROM prompts p
     JOIN generated_images i ON i.prompt_id = p.id
     WHERE p.session_id = $1
     ORDER BY p.created_at`,
    [id]
  );

  res.json(result.rows);
};
