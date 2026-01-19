import User from "../models/user.model.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Save filename in DB
    req.user.resumeFileName = req.file.filename;
    await req.user.save();

    return res.status(200).json({
      message: "Resume uploaded successfully",
      resumeFileName: req.file.filename
    });

  } catch (error) {
    console.error("UPLOAD RESUME ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
