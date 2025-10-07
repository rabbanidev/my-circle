import httpStatus from "http-status";
import catchAsync from "@/utils/catchAsync";
import { Request, Response } from "express";
import { FriendRequestService } from "@/modules/friendRequest/friendRequest.service";
import { IFriendRequest } from "@/modules/friendRequest/friendRequest.interface";
import sendResponse from "@/utils/response";

const friendRequestSent = catchAsync(async (req: Request, res: Response) => {
  const result = await FriendRequestService.friendRequestSent(
    req.body,
    req.user,
  );
  sendResponse<IFriendRequest>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Friend request sent successfully!",
    data: result,
  });
});

export const FriendRequestController = {
  friendRequestSent,
};
