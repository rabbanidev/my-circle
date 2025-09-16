import React from "react";

export default function LoginForm(): React.ReactElement {
  return (
    <form>
      <div className="mb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            aria-label="Phone number, username, or email"
            className="w-full px-2.5 py-2 bg-[#fafafa] dark:bg-gray-700 border border-[#dbdbdb] dark:border-gray-600 rounded text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-400"
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            aria-label="Password"
            className="w-full px-2.5 py-2 bg-[#fafafa] dark:bg-gray-700 border border-[#dbdbdb] dark:border-gray-600 rounded text-xs text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-400"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-300 text-xs"
          >
            Show
          </button>
        </div>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-[#0095f6] text-white py-2 px-4 rounded font-semibold text-sm hover:bg-[#0086e0] disabled:bg-[#b2dffc] disabled:cursor-not-allowed transition-colors"
        >
          Log in
        </button>
      </div>

      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-semibold my-5">
        <div className="flex-1 h-px bg-[#dbdbdb] dark:bg-gray-600 mr-4"></div>
        OR
        <div className="flex-1 h-px bg-[#dbdbdb] dark:bg-gray-600 ml-4"></div>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-[#0095f6] text-white py-2 px-4 rounded font-semibold text-sm hover:bg-[#0086e0] disabled:bg-[#b2dffc] disabled:cursor-not-allowed transition-colors"
        >
          Log in with Google
        </button>
      </div>
    </form>
  );
}
