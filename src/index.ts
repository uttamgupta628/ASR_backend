import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// Import routes
import serviceRoutes from "./routes/service";

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests (e.g., from your React Native app)
app.use(express.json()); // Parse incoming JSON

// Routes
app.use("/api/service", serviceRoutes); // Handle service info API

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
