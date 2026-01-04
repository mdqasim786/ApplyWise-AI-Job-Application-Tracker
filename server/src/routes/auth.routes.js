import express from "express";
import { signup,login,getMe } from "../controllers/auth.controllers.js";

const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.get("/me", getMe);

export default router;
