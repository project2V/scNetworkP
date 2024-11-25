import express from "express";
import cors from "cors";
import morgan from "morgan";
import { environments } from "./src/config/environments.js";
import { db_start } from "./src/db/start_db.js";
import { authRouter } from "./src/routes/auth.routes.js";
import userRouter from "./src/routes/user.routes.js";
import { pubRouter } from "./src/routes/pub.routes.js";
import path from "node:path";
const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5500",
  optionsSuccessStatus: 200,
  credentials: true,
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(path.resolve(), "src", "uploads")));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/pub", pubRouter);

// Database setup
const PORT = environments.PORT;
app.listen(PORT, async () => {
  await db_start();
  console.log(`Server running on: http://localhost:${PORT}`);
});
