import { Server, Socket } from "socket.io";
import { sentFriendRequestHandler } from "@/socket/handlers/friendRequest.handler";
import { totalNotificationHandler } from "@/socket/handlers/notification.handler";

const socketHandlers = (io: Server, socket: Socket) => {
  sentFriendRequestHandler(io, socket);
  totalNotificationHandler(io, socket);
};

export default socketHandlers;
