import logger from "@/config/logger";
import { getMyUnreadTotalNotification } from "@/modules/notification/notification.utils";
import { Server, Socket } from "socket.io";

export const totalNotificationHandler = (io: Server, socket: Socket) => {
  socket.on("unread_total_notification_emit", async () => {
    try {
      const userId = socket.data?.user?.userId;
      const totalNotification = await getMyUnreadTotalNotification(userId);
      io.to(userId).emit("unread_total_notification_count", {
        total: totalNotification,
      });
    } catch (error) {
      logger.error(`Total notification count: ${error}`);
      socket.emit("error", {
        message: "Something went wrong while sending request.",
      });
    }
  });
};
