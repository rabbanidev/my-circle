import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import assets from "../../assets";

interface INavbarItem {
  title: string;
  to: string;
  icon: string;
}

const navbarItems: INavbarItem[] = [
  {
    title: "Home",
    to: "/",
    icon: assets.icons.home,
  },
  {
    title: "Message",
    to: "/messages",
    icon: assets.icons.message,
  },
  {
    title: "Notification",
    to: "/notifications",
    icon: assets.icons.notification,
  },

  {
    title: "Profile",
    to: "/me",
    icon: assets.icons.user,
  },
];

export default function Sidebar(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-40">
        <Link to="/" className="flex gap-2 items-center font-medium">
          <img
            src="/logo.png"
            alt="My Circle"
            className="h-6 object-contain dark:invert dark:brightness-200"
          />
        </Link>
        <button onClick={() => setOpen(!open)} className="btn">
          {open ? (
            <img
              src={assets.icons.close}
              alt="Close"
              className="dark:invert dark:brightness-200"
            />
          ) : (
            <img
              src={assets.icons.menu}
              alt="Menu"
              className="dark:invert dark:brightness-200"
            />
          )}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 px-6 py-2 
          transition-transform duration-300 fixed top-0 left-0 h-full w-[250px] z-40 transform flex lg:translate-x-0  flex-col ${
            open ? "translate-x-0" : "-translate-x-full"
          } 
        `}
      >
        <div className="relative">
          <Link
            to="/"
            className="flex gap-2 items-center font-medium py-4 mb-8"
          >
            <img
              src="/logo.png"
              alt="My Circle"
              className="h-6 object-contain dark:invert dark:brightness-200"
            />
          </Link>
          <button
            title="Change your mode"
            className="btn absolute top-2 -right-5"
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <img
                src={assets.icons.sun}
                alt="Sun"
                className="dark:invert dark:brightness-200"
              />
            ) : (
              <img src={assets.icons.moon} alt="Moon" />
            )}
          </button>
        </div>

        <ul className="flex-1 space-y-8 mt-6 lg:mt-0">
          {navbarItems.map((navbarItem) => (
            <li key={navbarItem.title}>
              <NavLink
                to={navbarItem.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm transition-colors
                  ${
                    isActive
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-zinc-800 dark:text-zinc-200 hover:text-blue-500 dark:hover:text-blue-400"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <img
                  src={navbarItem.icon}
                  alt={navbarItem.title}
                  className="dark:invert dark:brightness-200"
                />
                <span>{navbarItem.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

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
        </div>
      </aside>
    </>
  );
}
