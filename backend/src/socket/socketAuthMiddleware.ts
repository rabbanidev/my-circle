import envConfig from "@/config/env";
import { jwtHelpers } from "@/utils/jwt";
import { Secret } from "jsonwebtoken";
import { Socket } from "socket.io";

export const socketAuthMiddleware = (
  socket: Socket,
  next: (err?: Error) => void,
) => {
  try {
    const token = socket.handshake?.auth?.token;
    if (!token) {
      return next(new Error("Authentication token missing"));
    }

    const decodedUser = jwtHelpers.verifyToken(
      token,
      envConfig.jwt.access_secret as Secret,
    );

    socket.data.user = decodedUser;
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      next(new Error("Authentication failed: " + error.message));
    } else {
      next(new Error("Authentication failed: An unknown error occurred"));
    }
  }
};
