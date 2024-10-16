import { Router } from "express";
export const authRouter = Router();
import {
  loginUserSchema,
  registerUserSchema,
} from "../models/schemas/user.schemas.js";
import { validator } from "../middleware/validator.js";
import { loginUser, registerUser } from "../controllers/auth.controllers.js";

authRouter.post("/register", registerUserSchema, validator, registerUser);
authRouter.post("/login", loginUserSchema, validator, loginUser);
