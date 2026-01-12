import bcrypt from "bcrypt";

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    
    const user = await user.findById(userId).select('-password'); 
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      email: user.email,
      fullName: user.fullName,
      mobileNumber: user.mobileNumber,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { fullName, mobileNumber } = req.body;

    if (mobileNumber && !/^\+?[\d\s-()]+$/.test(mobileNumber)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullName, mobileNumber },
      { new: true } 
    ).select('-password');

    return res.status(200).json({
      message: "Profile updated",
      user: updatedUser
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const changePassword = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ message: "Password must be 8+ chars" });
    }

    const user = await user.findById(userId);
    
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Current password incorrect" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};