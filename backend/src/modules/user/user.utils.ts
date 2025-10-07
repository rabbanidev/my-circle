import User from "@/modules/user/user.model";
import { IUser } from "@/modules/user/user.interface";

export const getUserById = async (
  id: string,
): Promise<Partial<IUser | null>> => {
  const user = await User.findById(id);
  return user;
};
