import type React from "react";
import assets from "../../assets";

export default function AddComment(): React.ReactElement {
  return (
    <div className="px-3 mt-2 flex justify-between items-center">
      <input
        type="text"
        placeholder="Add a comment..."
        className="text-sm w-full outline-none dark:text-white rounded-md p-1"
      />
      <img
        src={assets.icons.continue}
        alt="Submit"
        className="dark:invert dark:brightness-200"
      />
    </div>
  );
}
