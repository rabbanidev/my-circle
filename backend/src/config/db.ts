import mongoose from "mongoose";
import envConfig from "@/config/env";
import logger from "@/config/logger";

const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.database_url as string);
    logger.info("📋 Database connected successfully");
  } catch (error) {
    logger.error("Database connection failed: " + error);
    process.exit(1);
  }
};

export default connectDB;
