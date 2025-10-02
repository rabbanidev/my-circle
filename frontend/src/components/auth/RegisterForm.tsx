import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, PasswordInput } from "../ui/input";
import { SubmitButton } from "../ui/button";
import { registerSchema } from "../../schema";

interface IFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm(): React.ReactElement {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-y-3 mb-3">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Enter your name"
              errorMessage={errors?.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              placeholder="Enter your email"
              errorMessage={errors?.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordInput
              placeholder="Enter your password"
              errorMessage={errors?.password?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <PasswordInput
              placeholder="Enter your confirm password"
              errorMessage={errors?.confirmPassword?.message}
              {...field}
            />
          )}
        />
      </div>

      <div className="mb-4">
        <SubmitButton label="Sign up" />
      </div>
    </form>
  );
}
