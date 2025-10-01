import { SortOrder } from "mongoose";

export interface IPaginationOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface IPaginationReturnOptions {
  page: number;
  limit: number;
  skip: number;
  sortConditions: { [key: string]: SortOrder };
}
