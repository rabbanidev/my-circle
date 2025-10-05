import type { USER_ROLE } from "../enum";

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
}
