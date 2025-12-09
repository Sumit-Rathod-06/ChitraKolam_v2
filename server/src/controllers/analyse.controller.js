import fs from "fs";
import FormData from "form-data";
import fetch from "node-fetch"; // ✅ required in Node < 18

export const uploadAndAnalyse = async (req, res) => {
  console.log("Received file:", req.file);
  try {
    // 1️⃣ Multer check
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    // 2️⃣ Create FormData for Flask
    const formData = new FormData();
    formData.append(
      "image",
      fs.createReadStream(req.file.path),
      req.file.originalname
    );

    // 3️⃣ Call Flask backend
    const flaskResponse = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      body: formData,
      headers: formData.getHeaders(),
    });

    const result = await flaskResponse.json();
    console.log("Flask response:", result);
    // 4️⃣ Remove uploaded file from server
    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Failed to delete temp file:", err);
    });

    // 5️⃣ Forward response to frontend
    if (!flaskResponse.ok) {
      return res.status(flaskResponse.status).json(result);
    }

    return res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error("Analysis Error:", error);
    return res.status(500).json({
      error: "Failed to analyze kolam image",
    });
  }
};