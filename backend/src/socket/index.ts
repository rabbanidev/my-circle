import logger from "@/config/logger";
import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

let io: Server;

export const initSocket = (httpServer: HttpServer) => {
  try {
    io = new Server(httpServer, {
      cors: {
        origin: ["http://localhost:5173"],
        credentials: true,
      },
      transports: ["websocket", "polling"],
    });

    io.on("connection", (socket: Socket) => {
      logger.info("✅ Socket connected:", socket.id);

      // TODO: Socket disconnected
      socket.on("disconnect", (reason) => {
        logger.error(`❌ Socket disconnected: ${socket.id} (${reason})`);
      });

      // TODO: Socket-level error
      socket.on("error", (error) => {
        logger.error(`❌ Socket error [${socket.id}]:`, error);
      });
    });

    // TODO: IO server error
    io.on("error", (error) => {
      logger.error("❌ IO Server error:", error);
    });

    logger.info("✅ Socket.IO initialized successfully");
  } catch (error) {
    // TODO: Initialization error
    logger.error("❌ Failed to initialize Socket.IO:", error);
  }
};

export const getIO = (): Server => io;
