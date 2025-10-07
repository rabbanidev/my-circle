import Notification from "@/modules/notification/notification.model";

export const getMyUnreadTotalNotification = async (userId: string) => {
  const total = await Notification.find({
    receiver: userId,
    isRead: false,
  }).countDocuments();

  return total;
};
