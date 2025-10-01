#!/bin/bash

MODULE_NAME=$1
if [ -z "$MODULE_NAME" ]; then
  echo "Please provide a module name. Example: npm run create:module user"
  exit 1
fi

CAP_MODULE_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${MODULE_NAME:0:1})${MODULE_NAME:1}" # Capitalized

DIR="./src/modules/$MODULE_NAME"
mkdir -p $DIR

# ---------- File contents ----------

# interface
cat > "$DIR/$MODULE_NAME.interface.ts" <<EOL
export interface I$CAP_MODULE_NAME {}

export type I${CAP_MODULE_NAME}Filters = {
  searchTerm?: string;
};
EOL

# model
cat > "$DIR/$MODULE_NAME.model.ts" <<EOL
import { model, Schema } from "mongoose";
import { I$CAP_MODULE_NAME } from "@/modules/$MODULE_NAME/$MODULE_NAME.interface";

const ${MODULE_NAME}Schema = new Schema<I$CAP_MODULE_NAME>({}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

const $CAP_MODULE_NAME = model<I$CAP_MODULE_NAME>("$CAP_MODULE_NAME", ${MODULE_NAME}Schema);

export default $CAP_MODULE_NAME;
EOL

# constant
cat > "$DIR/$MODULE_NAME.constant.ts" <<EOL
export const ${MODULE_NAME}FilterableFields: string[] = ["searchTerm"];
export const ${MODULE_NAME}SearchableFields: string[] = [];
EOL

# validation
cat > "$DIR/$MODULE_NAME.validation.ts" <<EOL
import { z } from "zod";

const create = z.object({
  body: z.object({}),
});

const update = z.object({
  body: z.object({}),
});

export const ${CAP_MODULE_NAME}Validation = {
  create,
  update,
};
EOL

# service
cat > "$DIR/$MODULE_NAME.service.ts" <<EOL
import { ${MODULE_NAME}SearchableFields } from "@/modules/$MODULE_NAME/$MODULE_NAME.constant";
import { IPaginationOptions } from "@/interfaces/pagination.interface";
import { I$CAP_MODULE_NAME, I${CAP_MODULE_NAME}Filters } from "@/modules/$MODULE_NAME/$MODULE_NAME.interface";
import { IResponse } from "@/interfaces/response.interface";
import { paginationHelpers } from "@/utils/pagination";
import $CAP_MODULE_NAME from "@/modules/$MODULE_NAME/$MODULE_NAME.model";

const create$CAP_MODULE_NAME = async (payload: I$CAP_MODULE_NAME): Promise<I$CAP_MODULE_NAME | null> => {
  console.log(payload);
  return null;
};

const update$CAP_MODULE_NAME = async (id: string, payload: Partial<I$CAP_MODULE_NAME>): Promise<I$CAP_MODULE_NAME | null> => {
  console.log({ id, payload });
  return null;
};

const delete$CAP_MODULE_NAME = async (id: string): Promise<I$CAP_MODULE_NAME | null> => {
  console.log(id);
  return null;
};

const get$CAP_MODULE_NAME = async (id: string): Promise<I$CAP_MODULE_NAME | null> => {
  console.log(id);
  return null;
};

const get${CAP_MODULE_NAME}s = async (
  filters: I${CAP_MODULE_NAME}Filters,
  paginationOptions: IPaginationOptions,
): Promise<IResponse<I$CAP_MODULE_NAME[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions: any[] = [];

  // TODO: Search filter
  if (searchTerm) {
    andConditions.push({
      \$or: ${MODULE_NAME}SearchableFields.map(field => ({
        [field]: { \$regex: searchTerm, \$options: "i" }
      }))
    });
  }

  // TODO: Additional filters
  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      \$and: Object.entries(filtersData).map(([field, value]) => ({ [field]: value }))
    });
  }

  // TODO: Pagination and sorting
  const { page, limit, skip, sortConditions } = paginationHelpers.calculatePagination(paginationOptions);
  const whereConditions = andConditions.length > 0 ? { \$and: andConditions } : {};

  const result = await $CAP_MODULE_NAME.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  // TODO: Total documents
  const total = await $CAP_MODULE_NAME.countDocuments(whereConditions);

  return {
    meta: { page, limit, total },
    data: result,
  };
};

export const ${CAP_MODULE_NAME}Service = {
  create$CAP_MODULE_NAME,
  update$CAP_MODULE_NAME,
  delete$CAP_MODULE_NAME,
  get$CAP_MODULE_NAME,
  get${CAP_MODULE_NAME}s,
};
EOL

# controller
cat > "$DIR/$MODULE_NAME.controller.ts" <<EOL
import httpStatus from "http-status";
import catchAsync from "@/utils/catchAsync";
import { Request, Response } from "express";
import { ${CAP_MODULE_NAME}Service } from "@/modules/$MODULE_NAME/$MODULE_NAME.service";
import { I$CAP_MODULE_NAME } from "@/modules/$MODULE_NAME/$MODULE_NAME.interface";
import sendResponse from "@/utils/response";
import pick from "@/utils/pick";
import { paginationFields } from "@/utils/constants";
import { ${MODULE_NAME}FilterableFields } from "@/modules/notification/${MODULE_NAME}.constant";

const create$CAP_MODULE_NAME = catchAsync(async (req: Request, res: Response) => {
  const result = await ${CAP_MODULE_NAME}Service.create$CAP_MODULE_NAME(req.body);
  sendResponse<I$CAP_MODULE_NAME>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "$CAP_MODULE_NAME successfully created!",
    data: result,
  });
});

const update$CAP_MODULE_NAME = catchAsync(async (req: Request, res: Response) => {
  const result = await ${CAP_MODULE_NAME}Service.update$CAP_MODULE_NAME(req.params.id as string, req.body);
  sendResponse<I$CAP_MODULE_NAME>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "$CAP_MODULE_NAME updated successfully!",
    data: result,
  });
});

const delete$CAP_MODULE_NAME = catchAsync(async (req: Request, res: Response) => {
  const result = await ${CAP_MODULE_NAME}Service.delete$CAP_MODULE_NAME(req.params.id as string);
  sendResponse<I$CAP_MODULE_NAME>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "$CAP_MODULE_NAME deleted successfully!",
    data: result,
  });
});

const get${CAP_MODULE_NAME}s = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ${MODULE_NAME}FilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await ${CAP_MODULE_NAME}Service.get${CAP_MODULE_NAME}s(filters, paginationOptions);

  sendResponse<I$CAP_MODULE_NAME[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "${CAP_MODULE_NAME}s retrieved successfully!",
    meta: result.meta,
    data: result.data,
  });
});

const get$CAP_MODULE_NAME = catchAsync(async (req: Request, res: Response) => {
  const result = await ${CAP_MODULE_NAME}Service.get$CAP_MODULE_NAME(req.params.id as string);
  sendResponse<I$CAP_MODULE_NAME>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "$CAP_MODULE_NAME retrieved successfully!",
    data: result,
  });
});

export const ${CAP_MODULE_NAME}Controller = {
  create$CAP_MODULE_NAME,
  update$CAP_MODULE_NAME,
  delete$CAP_MODULE_NAME,
  get${CAP_MODULE_NAME}s,
  get$CAP_MODULE_NAME,
};
EOL

# route
cat > "$DIR/$MODULE_NAME.route.ts" <<EOL
import { validateRequestHandler } from "@/middlewares/validate.middleware";
import express from "express";
import { ${CAP_MODULE_NAME}Validation } from "@/modules/$MODULE_NAME/$MODULE_NAME.validation";
import { ${CAP_MODULE_NAME}Controller } from "@/modules/$MODULE_NAME/$MODULE_NAME.controller";

const router = express.Router();

router.post("/create", validateRequestHandler(${CAP_MODULE_NAME}Validation.create), ${CAP_MODULE_NAME}Controller.create$CAP_MODULE_NAME);
router.patch("/update/:id", validateRequestHandler(${CAP_MODULE_NAME}Validation.update), ${CAP_MODULE_NAME}Controller.update$CAP_MODULE_NAME);
router.delete("/delete/:id", ${CAP_MODULE_NAME}Controller.delete$CAP_MODULE_NAME);
router.get("/:id", ${CAP_MODULE_NAME}Controller.get$CAP_MODULE_NAME);
router.get("/", ${CAP_MODULE_NAME}Controller.get${CAP_MODULE_NAME}s);

export const ${CAP_MODULE_NAME}Routes = router;
EOL

# utils
cat > "$DIR/$MODULE_NAME.utils.ts" <<EOL
export const ${MODULE_NAME}Utils = {
  example: () => console.log("Utility function for $CAP_MODULE_NAME"),
};
EOL

echo "Module '$MODULE_NAME' created successfully in $DIR"
