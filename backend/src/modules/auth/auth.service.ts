import httpStatus from "http-status";
import {
  IRegisterPayload,
  IAuthResponse,
  ILoginPayload,
  IRefreshTokenResponse,
} from "@/modules/auth/auth.interface";
import User from "@/modules/user/user.model";
import { ApiError } from "@/utils/errors";
import { jwtHelpers } from "@/utils/jwt";
import envConfig from "@/config/env";
import { JwtPayload, Secret } from "jsonwebtoken";
import { IUser } from "@/modules/user/user.interface";

const register = async (payload: IRegisterPayload): Promise<IAuthResponse> => {
  const user = new User();
  const existingUser = await user.findUserByEmail(payload.email);

  if (existingUser) {
    throw new ApiError(httpStatus.CONFLICT, "Already registered user.");
  }

  const newUser = await User.create(payload);
  if (!newUser) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Failed to register user.",
    );
  }

  const { _id: userId, role } = newUser;

  const accessToken = jwtHelpers.generateToken(
    {
      userId,
      role,
    },
    envConfig.jwt.access_secret as Secret,
    envConfig.jwt.access_expires_in as string,
  );

  const refreshToken = jwtHelpers.generateToken(
    {
      userId,
      role,
    },
    envConfig.jwt.refress_secret as Secret,
    envConfig.jwt.refress_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const login = async (payload: ILoginPayload): Promise<IAuthResponse> => {
  const user = new User();
  const existingUser = (await user.findUserByEmail(payload.email)) as IUser & {
    _id: string;
  };

  if (!existingUser) {
    throw new ApiError(httpStatus.CONFLICT, "User not found.");
  }

  const isPasswordMatched = await user.matchPassword(
    payload.password,
    existingUser.password,
  );
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Wrong password.");
  }

  const { _id: userId, role } = existingUser;

  const accessToken = jwtHelpers.generateToken(
    {
      userId,
      role,
    },
    envConfig.jwt.access_secret as Secret,
    envConfig.jwt.access_expires_in as string,
  );

  const refreshToken = jwtHelpers.generateToken(
    {
      userId,
      role,
    },
    envConfig.jwt.refress_secret as Secret,
    envConfig.jwt.refress_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (
  payload: string,
): Promise<IRefreshTokenResponse> => {
  // TODO: verify token
  let verifyToken: JwtPayload | null = null;
  try {
    verifyToken = jwtHelpers.verifyToken(
      payload,
      envConfig.jwt.refress_secret as Secret,
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid refresh token.");
  }

  // TODO: Check user exit in database
  const { userId } = verifyToken as JwtPayload;
  const user = new User();
  const existingUser = (await user.findUserByUserId(
    userId as string,
  )) as IUser & {
    _id: string;
  };

  if (!existingUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found!");
  }

  //  Generate a new access token
  const newAccessToken = jwtHelpers.generateToken(
    {
      userId: existingUser._id,
      role: existingUser.role,
    },
    envConfig.jwt.access_secret as Secret,
    envConfig.jwt.access_expires_in as string,
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  register,
  login,
  refreshToken,
};
