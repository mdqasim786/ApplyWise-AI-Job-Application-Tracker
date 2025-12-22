// auth.routes.js
import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ message: "Signup route working" });
});

export default router;
