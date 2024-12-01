import { Router } from "express";
import { validator } from "../middleware/validator.js";
import {
  createPublication,
  getPublications,
  deletePublications,
  editPublications,
  getPublicationData,
} from "../controllers/pub.controllers.js";
import { publiSchema } from "../models/schemas/pub.schemas.js";
export const pubRouter = Router();

pubRouter.post("/create/:usersId", publiSchema, validator, createPublication);
pubRouter.get("/getpublications", getPublications);
pubRouter.delete("/delete/:id", deletePublications);
pubRouter.put("/edit/:id", publiSchema, validator, editPublications);
pubRouter.get("/getpublicationdata/:id", getPublicationData);
