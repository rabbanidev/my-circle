import React, { Suspense } from "react";
import LoginForm from "../../components/auth/LoginForm";
import { Link } from "react-router-dom";
import MetaData from "../../components/meta/MetaData";

export default function Login(): React.ReactElement {
  return (
    <>
      <MetaData
        title="My Circle | Signin"
        description="Log in to your My Circle account to access your photos and videos."
      />
      <div className="font-satoshi min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-[450px] w-[300px] mx-auto rounded-xl">
          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="My Circle"
              className="h-[30px] dark:invert dark:brightness-200"
            />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-700 mb-3 rounded-md">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-4">
              Sign in to continue.
            </h2>
            <Suspense
              fallback={
                <div className="text-center text-gray-500">Loading...</div>
              }
            >
              <LoginForm />
            </Suspense>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-blue-500 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
