import express from "express";
import { FriendRequestController } from "@/modules/friendRequest/friendRequest.controller";
import auth from "@/middlewares/auth.middleware";
import { USER_ROLE } from "@/enum";

const router = express.Router();

router.get(
  "/my-friend-request/:friendId",
  auth(USER_ROLE.USER),
  FriendRequestController.getMyFriendRequest,
);

export const FriendRequestRoutes = router;
