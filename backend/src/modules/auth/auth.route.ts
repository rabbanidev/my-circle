import { validateRequestHandler } from "@/middlewares/validate.middleware";
import express from "express";
import { AuthValidation } from "@/modules/auth/auth.validation";
import { AuthController } from "@/modules/auth/auth.controller";

const router = express.Router();

router.post(
  "/register",
  validateRequestHandler(AuthValidation.registerSchema),
  AuthController.register,
);

router.post(
  "/login",
  validateRequestHandler(AuthValidation.loginSchema),
  AuthController.login,
);

router.post(
  "/refresh-token",
  validateRequestHandler(AuthValidation.refreshTokenSchema),
  AuthController.refreshToken,
);

export const AuthRoutes = router;
