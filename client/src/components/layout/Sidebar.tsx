import React from "react";
import { Link } from "react-router-dom";

const navbarItems: {
  title: string;
  to: string;
  icon: React.ReactElement;
}[] = [
  {
    title: "Home",
    to: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Notification",
    to: "/notifications",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-icon"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />{" "}
      </svg>
    ),
  },
  {
    title: "Create",
    to: "/create-post",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-icon"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />{" "}
      </svg>
    ),
  },
  {
    title: "Profile",
    to: "/me",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-icon"
      >
        {" "}
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />{" "}
        <circle cx={12} cy={7} r={4} />{" "}
      </svg>
    ),
  },
];

export default function Sidebar(): React.ReactElement {
  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 z-50 h-full w-[250px] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 px-6 py-2">
      {/* Logo */}
      <Link to="/" className="flex gap-2 items-center font-medium py-4 mb-8">
        <img
          src="/logo.png"
          alt="PhotoBooth"
          className="h-6 object-contain dark:invert dark:brightness-200"
        />
      </Link>

      {/* Navigation */}
      <ul className="flex-1 space-y-8">
        {navbarItems.map((navbarItem) => (
          <li key={navbarItem.title}>
            <Link
              to={navbarItem.to}
              className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {navbarItem.icon}
              <span>{navbarItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* User Info + Logout */}
      <div className="flex justify-between mt-auto">
        <Link to="/me" className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700">
            <img
              src="https://avatars.githubusercontent.com/u/61206200"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-2">
            <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              Golam Rabbani
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-none">
              rabbani.cse.eub@gmail.com
            </p>
          </div>
        </Link>
        <button
          title="logout"
          className="p-1 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        >
          <svg
            className="h-4 w-4 text-zinc-800 dark:text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="m8 0c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm-3.5 4h6.5v2h-6.5c-1.379 0-2.5 1.122-2.5 2.5v5.5h-2v-5.5c0-2.481 2.019-4.5 4.5-4.5zm11.5 8h2v2h-2c-1.654 0-3-1.346-3-3v-6c0-1.654 1.346-3 3-3h2v2h-2c-.552 0-1 .449-1 1v6c0 .551.448 1 1 1zm8-3.941c0 .548-.24 1.07-.658 1.432l-2.681 2.362-1.322-1.5 1.535-1.354h-3.874v-2h3.74l-1.401-1.235 1.322-1.5 2.688 2.37c.411.355.651.877.651 1.425z" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
