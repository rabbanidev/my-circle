import { z } from "zod";

const registerSchema = z
  .object({
    body: z.object({
      name: z.string("Name is required").min(1, "Name is required."),
      email: z.email("Invalid email address."),
      password: z
        .string("Password is required")
        .min(6, "Password must be at least 6 characters long.")
        .max(16, "Password must be at most 16 characters long.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must contain at least one special character.",
        )
        .regex(/^\S+$/, "Password must not contain whitespace."),

      confirmPassword: z
        .string("Confirm password is required.")
        .min(6, "Confirm password must be at least 6 characters long.")
        .max(16, "Confirm password must be at most 16 characters long.")
        .regex(
          /[a-z]/,
          "Confirm password must contain at least one lowercase letter.",
        )
        .regex(
          /[A-Z]/,
          "Confirm password must contain at least one uppercase letter.",
        )
        .regex(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Confirm password must contain at least one special character.",
        )
        .regex(/^\S+$/, "Confirm password must not contain whitespace."),
    }),
  })
  .refine((data) => data.body.password === data.body.confirmPassword, {
    message: "Passwords do not match.",
    path: ["body", "confirmPassword"],
  });

const loginSchema = z.object({
  body: z.object({
    email: z.email("Invalid email address."),
    password: z
      .string("Password is required")
      .min(6, "Password must be at least 6 characters long.")
      .max(16, "Password must be at most 16 characters long.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character.",
      )
      .regex(/^\S+$/, "Password must not contain whitespace."),
  }),
});

const refreshTokenSchema = z.object({
  cookies: z.object({
    refreshToken: z.string("Refresh token is required."),
  }),
});

export const AuthValidation = {
  registerSchema,
  loginSchema,
  refreshTokenSchema,
};
