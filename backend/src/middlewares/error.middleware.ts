/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import httpStatus from "http-status";
import envConfig from "@/config/env";
import { ErrorRequestHandler, RequestHandler } from "express";
import { IErrorMessage, INotFound } from "@/interfaces/error.interface";
import { ZodError } from "zod";
import logger from "@/config/logger";
import {
  ApiError,
  handleCastError,
  handleValidationError,
  handleZodError,
} from "@/utils/errors";

export const notFoundHandler: RequestHandler = (req, res, next) => {
  const notFoundResponse: INotFound = {
    success: false,
    message: "Not Found!",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found!",
      },
    ],
  };

  res.status(httpStatus.NOT_FOUND).json(notFoundResponse);

  next();
};

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  if (envConfig.node_env === "development") {
    console.log("Global Error Handler", error);
  } else {
    logger.error("Global Error Handler", error?.errors);
  }

  // error handling start
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR as number;
  let message = "Something went wrong !";
  let errorMessages: IErrorMessage[] = [];

  if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === "CastError") {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [{ path: "", message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [{ path: "", message: error?.message }]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: envConfig.node_env !== "production" ? error?.stack : undefined,
  });
};
