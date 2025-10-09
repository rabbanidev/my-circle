import logger from "@/config/logger";
import FriendRequest from "@/modules/friendRequest/friendRequest.model";
import Notification from "@/modules/notification/notification.model";
import mongoose from "mongoose";
import { Server, Socket } from "socket.io";

export const sentFriendRequestHandler = (io: Server, socket: Socket) => {
  socket.on(
    "friend_request_sent",
    async ({ receiverId }: { receiverId: string }) => {
      const session = await mongoose.startSession();
      session.startTransaction();

      try {
        const senderId = socket.data?.user?.userId;

        // TODO: Self request not allow
        if (senderId === receiverId) {
          socket.emit("error", {
            message: "You cannot send a friend request to yourself.",
          });
          await session.abortTransaction();
          return;
        }
        // TODO: New requested friend added into DB
        await FriendRequest.create(
          [{ sender: senderId, receiver: receiverId }],
          { session },
        );

        // TODO: Notification added into DB
        await Notification.create(
          [
            {
              sender: senderId,
              receiver: receiverId,
              title: "You have received a new friend request.",
            },
          ],
          { session },
        );

        await session.commitTransaction();

        // TODO: New friend request notification sent
        io.to(receiverId).emit("notification_received", {
          message: "You have received a new friend request.",
        });

        // TODO: Friend request succes client notify
        socket.emit("friend_request_success", {
          success: true,
          message: "Friend request sent.",
        });
      } catch (error) {
        await session.abortTransaction();
        logger.error(`Friend request error: ${error}`);
        if ((error as { code?: number }).code === 11000) {
          socket.emit("error", { message: "Friend request already sent." });
        } else {
          socket.emit("error", {
            message: "Something went wrong while sending request.",
          });
        }
      } finally {
        session.endSession();
      }
    },
  );
};
