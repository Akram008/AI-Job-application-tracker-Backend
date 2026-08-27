import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRoutes from "./routes/user.routes.js";

app.use("/api/users", userRoutes);

export {app}