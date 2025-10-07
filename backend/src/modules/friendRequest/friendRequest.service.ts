import httpStatus from "http-status";
import { ApiError } from "@/utils/errors";
import { JwtPayload } from "jsonwebtoken";
import { friendRequestSentHandler } from "@/socket/handlers/friendRequest.handler";

const friendRequestSent = async (
  payload: {
    userId: string;
  },
  user: JwtPayload,
) => {
  if (payload.userId === user.userId) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "You cannot send a friend request to yourself.",
    );
  }
};

export const FriendRequestService = {
  friendRequestSent,
};
