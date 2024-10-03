import { Router } from "express";
export const userRouter = Router();
import { ctrl } from "../controllers/controllers.js";
import { registerUserSchema } from "../models/schemas/user.schemas.js";
import { validator } from "../middleware/validator.js";

userRouter.post("/register", registerUserSchema, validator, ctrl.regUser);
userRouter.post("/login", registerUserSchema, validator, ctrl.loginUser);
