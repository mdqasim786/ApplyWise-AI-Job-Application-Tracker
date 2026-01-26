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
    console.error("updateSettings error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const uploadResume = async (req, res) => {
  try {
    console.log("📁 Upload request received");
    console.log("User ID:", req.user?._id);
    console.log("File:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const userId = req.user._id;
    const resumeUrl = `/uploads/resumes/${req.file.filename}`;
    const resumeFileName = req.file.originalname;

    console.log("Updating user with:", { resumeUrl, resumeFileName });

    // Use this approach to ensure the update works
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.resumeUrl = resumeUrl;
    user.resumeFileName = resumeFileName;
    await user.save();

    console.log("✅ User updated successfully");
    console.log("Resume filename saved:", user.resumeFileName);

    return res.status(200).json({
      message: "Resume uploaded successfully",
      resumeUrl: user.resumeUrl,
      resumeFileName: user.resumeFileName
    });
  } catch (error) {
    console.error("❌ Upload error:", error);
    return res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

export const deleteResume = async (req, res) => {
  try {
    const userId = req.user._id;
    
    await User.findByIdAndUpdate(userId, {
      resumeUrl: "",
      resumeFileName: ""
    });

    return res.status(200).json({
      message: "Resume deleted successfully"
    });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "Delete failed" });
  }
};