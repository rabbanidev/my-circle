import React from "react";
import assets from "../../assets";

export default function PostCardAction(): React.ReactElement {
  return (
    <div className="flex justify-between p-3">
      <div className="flex space-x-4">
        <button className="btn transform transition-transform duration-200 hover:scale-110">
          <img
            src={assets.icons.love}
            alt="Likes"
            className="dark:invert dark:brightness-200"
          />
        </button>
        <button className="btn">
          <img
            src={assets.icons.message}
            alt="Comments"
            className="dark:invert dark:brightness-200"
          />
        </button>
      </div>
      <button className="btn">
        <img
          src={assets.icons.share}
          alt="Share"
          className="dark:invert dark:brightness-200"
        />
      </button>
    </div>
  );
}
