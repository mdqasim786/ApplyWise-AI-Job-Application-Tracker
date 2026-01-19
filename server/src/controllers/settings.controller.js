import User from "../models/user.model.js";

export const getSettings = async (req, res) => {
  try {
    const user = req.user; // comes from authMiddleware

    return res.status(200).json({
      email: user.email,
      alternateEmail: user.alternateEmail || "",
      mobileNumber: user.mobileNumber || "",
      resumeUrl: user.resumeUrl || "",
      resumeFileName: user.resumeFileName || "",
    });
  } catch (error) {
    console.error("getSettings error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const userId = req.user._id;
    const { alternateEmail, mobileNumber } = req.body;

    if (alternateEmail) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(alternateEmail)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { alternateEmail, mobileNumber },
      { new: true }
    ).select('-password');

    return res.status(200).json({
      message: "Settings updated successfully",
      user: updatedUser
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const uploadResume = async (req, res) => {
  try {
    const userId = req.user.userId;
    
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const resumeUrl = `/uploads/resumes/${req.file.filename}`;
    const resumeFileName = req.file.originalname;

    await User.findByIdAndUpdate(userId, {
      resumeUrl,
      resumeFileName
    });

    return res.status(200).json({
      message: "Resume uploaded successfully",
      resumeUrl,
      resumeFileName
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ message: "Upload failed" });
  }
};