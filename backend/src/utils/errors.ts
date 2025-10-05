import { IErrorMessage, IErrorResponse } from "@/interfaces/error.interface";
import { Error } from "mongoose";
import { ZodError } from "zod";

export class ApiError extends Error {
  statusCode: number;
  constructor(statusCode: number, message: string | undefined, stack?: "") {
    super(message as string);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const handleValidationError = (
  error: Error.ValidationError,
): IErrorResponse => {
  const listOfErrors = Object.values(error.errors);
  const errors: IErrorMessage[] = listOfErrors.map(
    (el: Error.ValidatorError | Error.CastError) => {
      return { path: el?.path, message: el?.message };
    },
  );

  const statusCode = 400;
  const message = "Validation Error";
  const errorMessages = errors;

  return {
    statusCode,
    message,
    errorMessages,
  };
};

export const handleCastError = (error: Error.CastError): IErrorResponse => {
  const errors: IErrorMessage[] = [
    { path: error?.path, message: "Invalid Id" },
  ];

  const statusCode = 400;
  const message = "Invalid Id";
  const errorMessages = errors;

  return {
    statusCode,
    message,
    errorMessages,
  };
};

export const handleZodError = (error: ZodError): IErrorResponse => {
  const statusCode = 400;
  const message = "Validation Error";

  const errorMessages: IErrorMessage[] = error.issues.map(
    (issue: ZodError["issues"][number]) => {
      const lastPath = issue?.path[issue?.path?.length - 1];
      return {
        path: lastPath as string | number,
        message: issue?.message,
      };
    },
  );

  return {
    statusCode,
    message,
    errorMessages,
  };
};
