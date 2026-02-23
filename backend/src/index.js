import express from "express";
import cors from "cors";
import "dotenv/config";
// import job from "./lib/cron.js"; // this will be done when the app will be deployed on some cloud server i.e. in production mode

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// job.start(); // this will be done when the app will be deployed on some cloud server i.e. in production mode
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
