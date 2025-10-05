import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/utils/errors";
import envConfig from "@/config/env";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import { jwtHelpers } from "@/utils/jwt";

const auth = (...requiredRoles: string[]) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      // TODO: Get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Your are not authorized!");
      }

      // TODO: Check token format
      const splittedToken = token.split(" ");
      if (splittedToken.length !== 2 || splittedToken[0] !== "Bearer") {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid token format!");
      }

      // TODO: verify token
      const verifiedUser = jwtHelpers.verifyToken(
        splittedToken[1] as string,
        envConfig.jwt.access_secret as Secret,
      );

      // TODO: Set verified user for next middleware
      req.user = verifiedUser;

      // TODO: Check role exit in required roles
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden!");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
