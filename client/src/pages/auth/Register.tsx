import React, { Suspense } from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import { Link } from "react-router-dom";
import MetaData from "../../components/meta/MetaData";

export default function Register(): React.ReactElement {
  return (
    <>
      <MetaData
        title="My Circle | Signup"
        description="Create your My Circle account and start sharing photos and videos with your friends."
      />
      <div className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="max-w-[350px] w-full mx-auto">
          <div className="flex justify-center mb-4">
            <img
              src="/logo.png"
              alt="My Circle"
              className="h-[30px] dark:invert dark:brightness-200"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-700 mb-3 rounded-md shadow-sm">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-4">
              Sign up to see photos and videos from your friends.
            </h2>
            <Suspense
              fallback={
                <div className="text-center text-gray-500">Loading...</div>
              }
            >
              <RegisterForm />
            </Suspense>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-700 text-center mb-4 rounded-md">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Have an account?{" "}
              <Link to="/login" className="text-blue-500 font-semibold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
