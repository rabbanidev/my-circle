import { JwtPayload } from "jsonwebtoken";
import FriendRequest from "@/modules/friendRequest/friendRequest.model";
import { IFriendRequest } from "./friendRequest.interface";

const getMyFriendRequest = async (
  friendId: string,
  user: JwtPayload,
): Promise<IFriendRequest | null> => {
  const result = await FriendRequest.findOne({
    $or: [
      { sender: user.userId, receiver: friendId },
      { sender: friendId, receiver: user.userId },
    ],
  });

  return result;
};

export const FriendRequestService = {
  getMyFriendRequest,
};
