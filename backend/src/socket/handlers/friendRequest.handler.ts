import logger from "@/config/logger";
import FriendRequest from "@/modules/friendRequest/friendRequest.model";
import Notification from "@/modules/notification/notification.model";
import { Server, Socket } from "socket.io";

export const friendRequestSentHandler = (io: Server, socket: Socket) => {
  socket.on(
    "friend_request_sent",
    async ({ receiverId }: { receiverId: string }) => {
      try {
        const senderId = socket.data?.user?.userId;

        // TODO: Self request not allow
        if (senderId === receiverId) {
          return socket.emit("error", {
            message: "You cannot send a friend request to yourself.",
          });
        }

        // TODO: New friend added into DB
        await FriendRequest.create({
          sender: senderId,
          receiver: receiverId,
        });

        // TODO: Notification added into DB
        await Notification.create({
          sender: senderId,
          receiver: receiverId,
          title: "You have received a new friend request.",
        });

        // TODO: New friend request notification sent
        io.to(receiverId).emit("notification_received", {
          message: "You have received a new friend request.",
        });
      } catch (error) {
        logger.error(`Friend sending request: ${error}`);
        if ((error as { code?: number }).code === 11000) {
          socket.emit("error", {
            message: "Friend request already sent.",
          });
        } else {
          socket.emit("error", {
            message: "Something went wrong while sending request.",
          });
        }
      }
    },
  );
};
