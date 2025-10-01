import httpStatus from "http-status";
import catchAsync from "@/utils/catchAsync";
import { Request, Response } from "express";
import { AuthService } from "@/modules/auth/auth.service";
import sendResponse from "@/utils/response";
import envConfig from "@/config/env";
import {
  IAuthResponse,
  IRefreshTokenResponse,
} from "@/modules/auth/auth.interface";

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);

  // TODO: Set refresh token into cookies
  const cookiesOptions = {
    secure: envConfig.node_env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", result.refreshToken, cookiesOptions);

  sendResponse<IAuthResponse>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User successfully registered.",
    data: result,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  // TODO: Set refresh token into cookies
  const cookiesOptions = {
    secure: envConfig.node_env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", result.refreshToken, cookiesOptions);

  sendResponse<IAuthResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User successfully login.",
    data: result,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);

  // set refresh token into cookies
  const cookiesOptions = {
    secure: envConfig.node_env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", refreshToken, cookiesOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New refresh token created successfuly!",
    data: result,
  });
});

export const AuthController = {
  register,
  login,
  refreshToken,
};
