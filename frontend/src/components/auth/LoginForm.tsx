import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, PasswordInput } from "../ui/input";
import { SubmitButton } from "../ui/button";
import { loginSchema } from "../../schema";
import { useLoginMutation } from "../../rtk/features/auth/authApi";
import { Error } from "../ui/error";
import type { IError, ILoginFormData } from "../../types";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginForm(): React.ReactElement {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();

  const onSubmit = (data: ILoginFormData) => {
    login(data);
  };

  const redirectPath = location.state?.prevPath
    ? location.state?.prevPath
    : "/";

  useEffect(() => {
    if (isSuccess) {
      navigate(redirectPath);
    }
  }, [isSuccess, navigate, redirectPath]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-y-3 mb-3">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
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
      </div>

      <div className="mb-4">
        <SubmitButton label="Log in" loading={isLoading} />
      </div>

      {isError && <Error message={(error as IError)?.message} />}

      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-semibold my-5">
        <div className="flex-1 h-px bg-[#dbdbdb] dark:bg-gray-600 mr-4"></div>
        OR
        <div className="flex-1 h-px bg-[#dbdbdb] dark:bg-gray-600 ml-4"></div>
      </div>

      {/* <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-[#0095f6] text-white py-2 px-4 rounded font-semibold text-sm hover:bg-[#0086e0] disabled:bg-[#b2dffc] disabled:cursor-not-allowed transition-colors"
        >
          Log in with Google
        </button>
      </div> */}
    </form>
  );
}
