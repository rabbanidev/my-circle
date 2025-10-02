import { useState } from "react";
import { Error } from "./error";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type?: string;
  value?: string;
  errorMessage?: string;
}

export function Input({ type, value, errorMessage, ...rest }: InputProps) {
  return (
    <div className="relative col-span-1">
      <input
        type={type}
        value={value ?? ""}
        className="w-full px-2.5 py-2 bg-[#fafafa] dark:bg-gray-700 border border-[#dbdbdb] dark:border-gray-600 rounded text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-400"
        {...rest}
      />
      <Error message={errorMessage} />
    </div>
  );
}

interface PasswordInputProps extends React.HTMLProps<HTMLInputElement> {
  value?: string;
  errorMessage?: string;
}

export function PasswordInput({
  value,
  errorMessage,
  ...rest
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="col-span-1">
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value ?? ""}
          className="w-full px-2.5 py-2 bg-[#fafafa] dark:bg-gray-700 border border-[#dbdbdb] dark:border-gray-600 rounded text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-400"
          {...rest}
        />
        <button
          type="button"
          className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-300 text-xs"
          onClick={() => setShowPassword(!showPassword)}
        >
          Show
        </button>
      </div>
      <Error message={errorMessage} />
    </div>
  );
}
