import React from "react";

export default function PostHeader(): React.ReactElement {
  return (
    <div className="flex items-center p-3">
      <a
        href="#"
        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white text-xs"
      >
        <img
          src="https://avatars.githubusercontent.com/u/61206200"
          className="w-full h-full object-cover"
          alt="Golam Rabbani"
        />
      </a>
      <div className="ml-2">
        <a href="#" className="font-semibold text-sm dark:text-white">
          Golam Rabbani
        </a>
        <span className="text-gray-500 text-xs dark:text-gray-400"> • 6m</span>
      </div>
    </div>
  );
}
