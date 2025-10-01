import { z } from "zod";

const create = z.object({
  body: z.object({}),
});

const update = z.object({
  body: z.object({}),
});

export const UsertValidation = {
  create,
  update,
};
