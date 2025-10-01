import { userSearchableFields } from "@/modules/user/user.constant";
import { IPaginationOptions } from "@/interfaces/pagination.interface";
import { IUser, IUserFilters } from "@/modules/user/user.interface";
import { IResponse } from "@/interfaces/response.interface";
import { paginationHelpers } from "@/utils/pagination";
import User from "@/modules/user/user.model";

const createUser = async (payload: IUser): Promise<IUser | null> => {
  console.log(payload);
  return null;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>,
): Promise<IUser | null> => {
  console.log({ id, payload });
  return null;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  console.log(id);
  return null;
};

const getUsers = async (
  filters: IUserFilters,
  paginationOptions: IPaginationOptions,
): Promise<IResponse<IUser[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  // TODO: Search filter
  if (searchTerm) {
    andConditions.push({
      $or: userSearchableFields.map((field) => ({
        [field]: { $regex: searchTerm, $options: "i" },
      })),
    });
  }

  // TODO: Additional filters
  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // pagination options
  const { page, limit, skip, sortConditions } =
    paginationHelpers.calculatePagination(paginationOptions);

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await User.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  // TODO: Total documents
  const total = await User.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getUser = async (id: string): Promise<IUser | null> => {
  console.log(id);
  return null;
};

export const UserService = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUser,
};
