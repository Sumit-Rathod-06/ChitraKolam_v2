import axios from "axios";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// ✅ NGROK URL
const API_URL = "https://chromic-sheron-plaguily.ngrok-free.dev/generate";

export const generate = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image provided",
      });
    }

    // ✅ Send image to NGROK (multipart)
    const FormData = (await import("form-data")).default;
    const fd = new FormData();

    fd.append("file", req.file.buffer, {
      filename: "input.png",
      contentType: "image/png",
    });

    fd.append("prompt", "A beautiful artistic kolam design");
    fd.append("negative_prompt", "");
    fd.append("control_scale", "0.7");
    fd.append("lora_scale", "1.0");

    const response = await axios.post(API_URL, fd, {
      headers: fd.getHeaders(),
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    // ✅ Validate response
    if (!response.data?.result) {
      return res.status(500).json({
        success: false,
        message: "Invalid ML response",
      });
    }

    // ✅ Convert base64 → file
    const imageBuffer = Buffer.from(response.data.result, "base64");
    const fileName = `${uuidv4()}.png`;

    const uploadDir = path.join("uploads", "canvas");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, imageBuffer);

    const imageUrl = `http://localhost:5000/uploads/canvas/${fileName}`;

    // ✅ Return URL (SAME STYLE AS YOUR OTHER CONTROLLER)
    return res.status(200).json({
      success: true,
      imageUrl,
    });

  } catch (error) {
    console.error("Canvas Generate Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Canvas image generation failed",
    });
  }
};
