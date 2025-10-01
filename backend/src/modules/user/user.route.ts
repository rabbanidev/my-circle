import { validateRequestHandler } from "@/middlewares/validate.middleware";
import express from "express";
import { UsertValidation } from "@/modules/user/user.validation";
import { UserController } from "@/modules/user/user.controller";

const router = express.Router();

router.post(
  "/create",
  validateRequestHandler(UsertValidation.create),
  UserController.createUser,
);

router.patch(
  "/update/:id",
  validateRequestHandler(UsertValidation.update),
  UserController.updateUser,
);

router.delete("/delete:id", UserController.deleteUser);
router.get("/:id", UserController.getUser);
router.get("/", UserController.getUsers);

export const UserRoutes = router;
