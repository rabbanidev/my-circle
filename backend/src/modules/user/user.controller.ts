import httpStatus from "http-status";
import catchAsync from "@/utils/catchAsync";
import { Request, Response } from "express";
import { UserService } from "@/modules/user/user.service";
import { IUser } from "@/modules/user/user.interface";
import sendResponse from "@/utils/response";
import pick from "@/utils/pick";
import { paginationFields } from "@/utils/constants";
import { userFilterableFields } from "./user.constant";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User successfully created!",
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.updateUser(
    req.params.id as string,
    req.body,
  );

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully!",
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteUser(req.params.id as string);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User deleted successfully!",
    data: result,
  });
});

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await UserService.getUsers(filters, paginationOptions);

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully!",
    meta: result.meta,
    data: result.data,
  });
});

const getUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUser(req.params.id as string);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully!",
    data: result,
  });
});

export const UserController = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
};
