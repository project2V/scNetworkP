import { Router } from "express";
import { uploadImage } from "../middleware/upload.middleware.js";
export const imageRouter = Router();

imageRouter.post("/upload", uploadImage, (req, res) => {
  res.status(201).json({
    image: "http://localhost:4000/api/img/" + req.body.image,
  });
});
