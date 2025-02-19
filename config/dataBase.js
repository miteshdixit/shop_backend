import mongoose from "mongoose";
import logger from "../utils/logger.js";

const DatabaseConnection = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => logger.info("Database connected"))
    .catch((err) => logger.error("Database connection error: ", err));

export default DatabaseConnection;
