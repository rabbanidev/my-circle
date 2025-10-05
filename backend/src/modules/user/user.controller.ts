import httpStatus from "http-status";
import catchAsync from "@/utils/catchAsync";
import { Request, Response } from "express";
import sendResponse from "@/utils/response";
import { UserService } from "@/modules/user/user.service";

const myInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.myInfo(req.user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "My profile fetched successfully.",
    data: result,
  });
});

const getUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUser(req.params.userId as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile fetched successfully.",
    data: result,
  });
});

export const UserController = {
  myInfo,
  getUser,
};
