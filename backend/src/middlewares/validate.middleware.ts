import { NextFunction, Request, Response } from "express";
import { ZodObject, ZodType } from "zod";

export const validateRequestHandler = (schema: ZodObject | ZodType) => {
  return async (
    req: Request,
    _res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
        cookies: req.cookies,
      });
      return next();
    } catch (error) {
      next(error);
    }
  };
};
