import React from "react";

export default function PostCaption(): React.ReactElement {
  return (
    <div className="px-3 mt-2">
      <p className="text-sm dark:text-white">
        <span className="font-semibold">Reactive Accelerator</span>
        <span className="caption-text text-gray-500 dark:text-gray-400">
          {" "}
          #AD
        </span>
        <span className="text-gray-500 dark:text-gray-400">... </span>
        <button className="text-gray-500 dark:text-gray-400 text-sm">
          more
        </button>
      </p>
    </div>
  );
}
