import { z } from "zod";

const friendRequestSent = z.object({
  body: z.object(
    {
      userId: z.string({
        error: "User ID is required.",
      }),
    },
    {
      error: "Body missing.",
    },
  ),
});

export const FriendRequestValidation = {
  friendRequestSent,
};
