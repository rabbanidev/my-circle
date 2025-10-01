import { model, Schema } from "mongoose";
import { IUser } from "@/modules/user/user.interface";

const userSchema = new Schema<IUser>(
  {},
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const User = model<IUser>("User", userSchema);

export default User;
