import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().required("Email is required.").email("Invalid email."),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters.")
      .max(12, "Password must be at most 12 characters.")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(/[^a-zA-Z0-9]/, "Password must contain at least one symbol.")
      .matches(/^\S*$/, "Password must not contain spaces"),
  })
  .required();

export const registerSchema = yup
  .object({
    name: yup
      .string()
      .required("Name is required.")
      .min(2, "Name must be at least 2 characters."),

    email: yup.string().required("Email is required.").email("Invalid email."),

    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters.")
      .max(12, "Password must be at most 12 characters.")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(/[^a-zA-Z0-9]/, "Password must contain at least one symbol.")
      .matches(/^\S*$/, "Password must not contain spaces"),

    confirmPassword: yup
      .string()
      .required("Confirm Password is required.")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();
