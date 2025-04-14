import express from "express";
import dotenv from "dotenv";
import { corsMiddleware } from "./middlewares/cors.middleware";
import userRoutes from "./modules/user/user.routes";
import healthRoutes from "./modules/health/health.routes";
import { upload } from "./middlewares/multer.middleware";

dotenv.config();

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRoutes);
app.use("/api/health", healthRoutes);

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

export default app;



