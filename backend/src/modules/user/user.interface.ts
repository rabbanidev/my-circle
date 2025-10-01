import { USER_ROLE } from "@/enum";
import { Model } from "mongoose";

export interface IUser {
  username?: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLE.USER;
  bio?: string;
  about?: string;
  profileImage?: string;
  coverImage?: string;
  dob?: Date;

  createdAt?: Date;
  updatedAt?: Date;
}

export type IUserMethods = {
  findUserByEmail(email: string): Promise<Partial<IUser> | null>;
  findUserByUsername(username: string): Promise<Partial<IUser> | null>;
  findUserByUserId(id: string): Promise<Partial<IUser> | null>;
  matchPassword(textPassword: string, hashPassword: string): Promise<boolean>;
};

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;

export type IUserFilters = {
  searchTerm?: string;
};
