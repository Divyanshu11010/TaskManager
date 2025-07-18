import { configDotenv } from "dotenv";
import express from 'express';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();

configDotenv();
const allowedOrigins = [process.env.CLIENT_URL];

app.use(
    cors({
        origin: function(origin, callback){
            if(!origin || allowedOrigins.includes(origin)) callback(null, true);
            else callback(new Error("Not allowed by CORS"))
        },
        methods: ["GET", "POST", 'PUT', "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    })
);
app.options("*", cors());

app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

// Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log("Server is running on port: ", port);
});