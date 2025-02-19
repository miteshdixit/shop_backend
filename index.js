import app from "./app.js";
import DatabaseConnection from "./config/dataBase.js";
import logger from "./utils/logger.js";

const PORT = process.env.PORT || 5000;

// Log all environment variables for debugging (Remove this after testing)
console.log("Environment Variables:", process.env);

// Try to connect to the database & start server
DatabaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1); // Force Render to show the error
  });
