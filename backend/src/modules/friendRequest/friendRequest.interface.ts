import mongoose from "mongoose";
import { IUser } from "../user/user.interface";

export interface IFriendRequest {
  sender: mongoose.Types.ObjectId | IUser;
  receiver: mongoose.Types.ObjectId | IUser;
  status: "pending" | "accepted" | "rejected" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

export type IFriendRequestFilters = {
  searchTerm?: string;
};
