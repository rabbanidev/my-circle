import logger from "@/config/logger";
import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import { socketAuthMiddleware } from "@/socket/socketAuthMiddleware";
import socketHandlers from "@/socket/handlers";

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

    // TODO: Apply JWT auth middleware
    io.use(socketAuthMiddleware);

    io.on("connection", (socket: Socket) => {
      logger.info(`✅ Socket connected: ${socket.id}`);

      const userId = socket.data?.user?.userId;
      if (userId) {
        socket.join(userId);
      }

      // TODO: All Socket handler
      socketHandlers(io, socket);

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
