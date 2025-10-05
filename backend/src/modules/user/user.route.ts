import { USER_ROLE } from "@/enum";
import auth from "@/middlewares/auth.middleware";
import express from "express";
import { UserController } from "@/modules/user/user.controller";

const router = express.Router();

router.get("/me", auth(USER_ROLE.USER), UserController.myInfo);

export const UserRoutes = router;
