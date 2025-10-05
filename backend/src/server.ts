import { createServer } from "http";
import envConfig from "@/config/env";
import app from "@/app";
import logger from "@/config/logger";
import connectDB from "@/config/db";
import { initSocket } from "@/socket";

// TODO:Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  logger.error(error);
  process.exit(1);
});

let httpServer = createServer(app);

async function main() {
  // TODO: Connect to Database
  await connectDB();

  // TODO: Initialize Socket.IO
  initSocket(httpServer);

  httpServer = httpServer.listen(envConfig.port, () => {
    logger.info(`Application listening on port ${envConfig.port}`);
  });

  // TODO: Handle unhandled promise rejections
  process.on("unhandledRejection", (error) => {
    if (httpServer) {
      httpServer.close(() => {
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
  if (httpServer) {
    httpServer.close(() => {
      logger.info("Server closed.");
    });
  }
});
