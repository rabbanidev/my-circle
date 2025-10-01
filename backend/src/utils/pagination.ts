import {
  IPaginationOptions,
  IPaginationReturnOptions,
} from "@/interfaces/pagination.interface";
import { SortOrder } from "mongoose";

const calculatePagination = (
  options: IPaginationOptions,
): IPaginationReturnOptions => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;

  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  return {
    page,
    limit,
    skip,
    sortConditions,
  };
};

export const paginationHelpers = {
  calculatePagination,
};
