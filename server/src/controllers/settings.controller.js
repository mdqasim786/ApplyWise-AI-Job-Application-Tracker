import User from "../models/user.model.js";

export const getSettings = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select('-password');
    
    return res.status(200).json({
      email: user.email,
      alternateEmail: user.alternateEmail,
      mobileNumber: user.mobileNumber,
      resumeUrl: user.resumeUrl,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const userId = req.user.userId;
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