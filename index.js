import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 2000;
import app from "./app.js";
import DatabaseConnection from "./config/dataBase.js";
import logger from "./utils/logger.js";

DatabaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error("Database connection failed:", err);
    process.exit(1);
  });
