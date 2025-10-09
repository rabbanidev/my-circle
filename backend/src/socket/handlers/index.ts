import { Server, Socket } from "socket.io";
import { friendRequestSentHandler } from "@/socket/handlers/friendRequest.handler";
import { totalNotificationHandler } from "@/socket/handlers/notification.handler";

const socketHandlers = (io: Server, socket: Socket) => {
  friendRequestSentHandler(io, socket);
  totalNotificationHandler(io, socket);
};

export default socketHandlers;
