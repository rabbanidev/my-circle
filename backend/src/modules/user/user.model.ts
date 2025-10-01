import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, UserModel } from "@/modules/user/user.interface";
import { USER_ROLE } from "@/enum";
import envConfig from "@/config/env";

const userSchema = new Schema<IUser, UserModel>(
  {
    username: {
      type: String,
      required: false,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: [USER_ROLE.USER],
      default: USER_ROLE.USER,
    },
    bio: {
      type: String,
    },
    about: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    dob: {
      type: Date,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const selectFields = {
  _id: 1,
  username: 1,
  email: 1,
  password: 1,
  role: 1,
};

//TODO: Check is user exit by email address using instance method
userSchema.methods.findUserByEmail = async function (
  email: string,
): Promise<Partial<IUser> | null> {
  const user = await User.findOne({ email }, { ...selectFields });
  return user;
};

//TODO: Check is user exit by username using instance method
userSchema.methods.findUserByUsername = async function (
  username: string,
): Promise<Partial<IUser> | null> {
  const user = await User.findOne({ username }, { ...selectFields });
  return user;
};

//TODO: Check is user exit by id using instance method
userSchema.methods.findUserByUserId = async function (
  id: string,
): Promise<Partial<IUser> | null> {
  const user = await User.findById(id, { ...selectFields });
  return user;
};

// TODO: Check match password using instance method
userSchema.methods.matchPassword = async function (
  textPassword: string,
  hashPassword: string,
): Promise<boolean> {
  const isMatchedPassword = await bcrypt.compare(textPassword, hashPassword);
  return isMatchedPassword;
};

// TODO: Hashing password
userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    this.password,
    Number(envConfig.bcrypt_sald_rounds),
  );

  next();
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
