import { Server } from "http";
import envConfig from "@/config/env";
import app from "@/app";
import logger from "@/config/logger";
import connectDB from "@/config/db";

// TODO:Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  logger.error(error);
  process.exit(1);
});

let server: Server;
async function main() {
  await connectDB();

  server = app.listen(envConfig.port, () => {
    logger.info(`Application listening on port ${envConfig.port}`);
  });

  // TODO: Handle unhandled promise rejections
  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        logger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

// TODO: Handle SIGTERM (process termination)
process.on("SIGTERM", () => {
  logger.info("SIGTERM signal received. Shutting down gracefully...");
  if (server) {
    server.close(() => {
      logger.info("Server closed.");
    });
  }
});
