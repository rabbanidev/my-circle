import React from "react";

export default function RegisterForm(): React.ReactElement {
  return (
    <form>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Email"
          aria-label="Email"
          className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="mb-2">
        <input
          type="text"
          placeholder="Full Name"
          aria-label="Full Name"
          className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="mb-3 relative">
        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 text-xs"
        >
          Show
        </button>
      </div>

      <div className="mb-3 relative">
        <input
          type="password"
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 text-xs"
        >
          Show
        </button>
      </div>

      <div className="mb-2">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-2 rounded-md text-sm transition-colors"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
