import type { IUser } from "./user.type";

export interface IFriendRequest {
  sender: IUser;
  receiver: IUser;
  status: "pending" | "accepted" | "rejected" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}
