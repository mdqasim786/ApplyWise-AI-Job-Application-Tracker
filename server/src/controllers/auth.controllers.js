  import User from "../models/user.model.js";
  import bcrypt from "bcrypt";
  import jwt from "jsonwebtoken";

  export const signup = async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }

      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          message: "Invalid email format",
        });
      }

      if (password.length < 8) {
        return res.status(400).json({
          message: "Password must be at least 8 characters",
        });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          message: "User already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        email,
        password: hashedPassword,
      });

      return res.status(201).json({
        message: "Signup successful",
        userId: newUser._id,
      });
    } catch (error) {
      console.error("Signup error:", error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };

  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;

      // 1️⃣ Validate input
      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }

      // 2️⃣ Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      // 3️⃣ Compare password
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
      );

      if (!isPasswordCorrect) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      // 4️⃣ Generate JWT
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      // 5️⃣ Send response
      return res.status(200).json({
        message: "Login successful",
        token: token,
        user: {
          id: user._id,
          email: user.email,
        }
      });

    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };

  export const getMe = async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
    
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
      }
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ 
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });

    } catch (error) {
      console.error('Error in getMe:', error);
    
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Invalid token' });
      }
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      }
      
      res.status(500).json({ message: 'Server error' });
    }
  };

