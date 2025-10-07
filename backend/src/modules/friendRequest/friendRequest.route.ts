import { validateRequestHandler } from "@/middlewares/validate.middleware";
import express from "express";
import { FriendRequestValidation } from "@/modules/friendRequest/friendRequest.validation";
import { FriendRequestController } from "@/modules/friendRequest/friendRequest.controller";
import auth from "@/middlewares/auth.middleware";
import { USER_ROLE } from "@/enum";

const router = express.Router();

router.post(
  "/request/sent",
  auth(USER_ROLE.USER),
  validateRequestHandler(FriendRequestValidation.friendRequestSent),
  FriendRequestController.friendRequestSent,
);

export const FriendRequestRoutes = router;
