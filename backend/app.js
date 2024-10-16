import express from "express";
import cors from "cors";
import morgan from "morgan";
import { environments } from "./src/config/environments.js";
import { db_start } from "./src/db/start_db.js";
import { authRouter } from "./src/routes/auth.routes.js";
import userRouter from "./src/routes/user.routes.js";
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Database setup
const PORT = environments.PORT;
app.listen(PORT, async () => {
  await db_start();
  console.log(`Server running on: http://localhost:${PORT}`);
});
