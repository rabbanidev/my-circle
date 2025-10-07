import { model, Schema } from "mongoose";
import { INotification } from "@/modules/notification/notification.interface";

const notificationSchema = new Schema<INotification>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  },
);

const Notification = model<INotification>("Notification", notificationSchema);

export default Notification;
