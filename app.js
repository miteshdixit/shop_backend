import dotenv from "dotenv";
dotenv.config();

// import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import appRouter from "./routes/index.js";
import rateLimit from "express-rate-limit";

const app = express();

// Body parser middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
// Security Middleware
app.use(helmet());

// CORS Middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    credentials: true,
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Setup rate limiter only for API routes
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Max 100 requests per minute
  message: { error: "Too many requests, please try again later" },
});
app.use("/api/v1", limiter, appRouter); // ✅ Rate limiter only applies to API

export default app;
