import bcrypt from "bcrypt";

export const getProfile = async (req, res) => {
  try {
    const user = req.user; // already fetched

    return res.status(200).json({
      email: user.email,
      fullName: user.fullName,
      mobileNumber: user.mobileNumber,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const { fullName, mobileNumber } = req.body;

    if (mobileNumber && !/^\+?[\d\s-()]+$/.test(mobileNumber)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    req.user.fullName = fullName;
    req.user.mobileNumber = mobileNumber;
    await req.user.save();

    return res.status(200).json({
      message: "Profile updated",
      user: {
        email: req.user.email,
        fullName: req.user.fullName,
        mobileNumber: req.user.mobileNumber,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

  export const changePassword = async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
  
      if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: "All fields required" });
      }
  
      if (newPassword.length < 8) {
        return res.status(400).json({ message: "Password must be 8+ chars" });
      }
  
      const isMatch = await bcrypt.compare(
        currentPassword,
        req.user.password
      );
  
      if (!isMatch) {
        return res.status(401).json({ message: "Current password incorrect" });
      }
  
      req.user.password = await bcrypt.hash(newPassword, 10);
      await req.user.save();
  
      return res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  };
  