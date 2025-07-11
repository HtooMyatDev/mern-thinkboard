// Import required modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import { rateLimiter } from "./middlware/rateLimiter.js";
// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(rateLimiter);
// Routes
app.use("/api/notes", notesRoutes);

// Connect to DB and start the server
connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server started on Port:", PORT);
  });
});
