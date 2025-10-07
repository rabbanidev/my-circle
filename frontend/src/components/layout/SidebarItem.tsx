import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  item: {
    title: string;
    to: string;
    icon: string;
  };
  setOpen: (v: boolean) => void;
  total: number;
}

export default function SidebarItem({
  item,
  setOpen,
  total,
}: SidebarItemProps) {
  return (
    <li>
      <NavLink
        to={item.to}
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
          src={item.icon}
          alt={item.title}
          className="dark:invert dark:brightness-200"
        />
        <span>{item.title}</span>

        {item.title === "Notification" && <span>({total})</span>}
      </NavLink>
    </li>
  );
}
