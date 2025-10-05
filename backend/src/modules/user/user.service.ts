import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import User from "@/modules/user/user.model";
import { ApiError } from "@/utils/errors";
import { IUser } from "@/modules/user/user.interface";

const myInfo = async (payload: JwtPayload): Promise<Partial<IUser>> => {
  const result = await User.findById(payload.userId).select("-password");
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  return result;
};

export const UserService = {
  myInfo,
};
