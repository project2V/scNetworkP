import { Router } from "express";
import { validator } from "../middleware/validator.js";
import {
  createPublication,
  getPublications,
  deletePublications,
} from "../controllers/pub.controllers.js";
import { publiSchema } from "../models/schemas/pub.schemas.js";
import { uploadImage } from "../middleware/upload.middleware.js";
export const pubRouter = Router();

pubRouter.post(
  "/create",
  publiSchema,
  validator,
  uploadImage,
  (req, res) => {
    res.status(201).json({
      image: "http://localhost:4000/api/img/" + req.body.image,
    });
  },
  createPublication
);
pubRouter.get("/getpublications", getPublications);
pubRouter.delete("/delete/:id", deletePublications);
