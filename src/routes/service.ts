// src/routes/service.ts
import express from "express";
import upload from "../utils/utils/cloudinary";
import { uploadServiceImage } from "../controllers/serviceController";

const router = express.Router();

router.post("/:serviceId/image", upload.single("image"), uploadServiceImage);

export default router;
