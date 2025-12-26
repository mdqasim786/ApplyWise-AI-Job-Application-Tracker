import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

/* 🔥 BODY PARSER — MUST COME BEFORE ROUTES */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* CORS */
app.use(cors());

/* ROUTES */
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("ApplyWise API running");
});

export default app;
