import express from "express";
import cors from "cors";
import morgan from "morgan";
import { environments } from "./src/config/environments.js";
import { db_start } from "./src/db/start_db.js";
import { userRouter } from "./src/routes/all.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(userRouter);

// Database setup
const PORT = environments.PORT;
app.listen(PORT, async () => {
  await db_start();
  console.log(`Server running on port: ${PORT}`);
});
