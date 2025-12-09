const pool = require("../db"); // your pg pool connection

// POST /api/text_to_image/session
const createSession = async (req, res) => {
  try {
    // ✅ user id from JWT middleware
    const userId = req.user.id;

    // ✅ title from frontend modal
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Session title is required",
      });
    }

    // ✅ insert session
    const result = await pool.query(
      `INSERT INTO sessions (user_id, title)
       VALUES ($1, $2)
       RETURNING id, title, created_at`,
      [userId, title.trim()]
    );

    // ✅ return created session
    return res.status(201).json({
      success: true,
      session: result.rows[0],
    });
  } catch (error) {
    console.error("Create Session Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create session",
    });
  }
};

module.exports = {
  createSession,
};
