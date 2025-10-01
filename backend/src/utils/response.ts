import { ISendResponse } from "@/interfaces/response.interface";
import { Response } from "express";

const sendResponse = <T>(res: Response, payload: ISendResponse<T>): void => {
  const responseData: ISendResponse<T> = {
    statusCode: payload.statusCode,
    success: payload.success,
    message: payload.message || null,
    meta: payload.meta || null || undefined,
    data: payload.data || null,
  };

  res.status(payload.statusCode).json(responseData);
};

export default sendResponse;
