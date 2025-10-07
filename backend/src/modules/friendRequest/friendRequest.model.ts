import { model, Schema } from "mongoose";
import { IFriendRequest } from "@/modules/friendRequest/friendRequest.interface";

const friendRequestSchema = new Schema<IFriendRequest>(
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
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  },
);

friendRequestSchema.index({ sender: 1, receiver: 1 }, { unique: true });

const FriendRequest = model<IFriendRequest>(
  "FriendRequest",
  friendRequestSchema,
);

export default FriendRequest;
