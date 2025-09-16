import React from "react";

export default function Likes(): React.ReactElement {
  return (
    <div className="px-3">
      <div className="flex items-center">
        <div className="h-6 flex -space-x-2">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="User avatar"
            className="w-6 h-6 rounded-full"
          />
          <img
            src="https://randomuser.me/api/portraits/men/66.jpg"
            alt="User avatar"
            className="w-6 h-6 rounded-full"
          />
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User avatar"
            className="w-6 h-6 rounded-full"
          />
        </div>
        <p className="text-sm ml-2 dark:text-white">
          <span className="font-semibold">126 likes</span>
        </p>
      </div>
    </div>
  );
}
