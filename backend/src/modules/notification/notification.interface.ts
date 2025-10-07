import mongoose from "mongoose";
import { IUser } from "../user/user.interface";

export interface INotification {
  sender: mongoose.Types.ObjectId | IUser;
  receiver: mongoose.Types.ObjectId | IUser;
  isRead: boolean;
  title: string;
  createdAt: Date;
}
