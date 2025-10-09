import { JwtPayload } from "jsonwebtoken";
import FriendRequest from "@/modules/friendRequest/friendRequest.model";
import { IFriendRequest } from "./friendRequest.interface";

const getMyFriendRequest = async (
  friendId: string,
  user: JwtPayload,
): Promise<IFriendRequest | null> => {
  const result = await FriendRequest.findOne({
    sender: user.userId,
    receiver: friendId,
  });

  return result;
};

export const FriendRequestService = {
  getMyFriendRequest,
};
