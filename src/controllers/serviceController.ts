// src/controllers/serviceController.ts
import { Request, Response } from "express";
import db from "../db";

export const uploadServiceImage = async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  const file = req.file as Express.Multer.File;

  if (!file || !file.path) {
    return res.status(400).json({ message: "No image uploaded" });
  }

  const imageUrl = file.path;

  try {
    const result = await db.query(
      "UPDATE services SET image_url = $1 WHERE id = $2 RETURNING *",
      [imageUrl, serviceId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({
      message: "Image updated successfully",
      service: result.rows[0],
    });
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
