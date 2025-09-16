import React from "react";
import PostCardHeader from "./PostHeader";
import PostAction from "./PostAction";
import Likes from "./Likes";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import AddComment from "./AddComment";

export default function PostCard(): React.ReactElement {
  return (
    <article className="pb-4 mb-4 max-w-[560px] mx-auto border rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <PostCardHeader />
      <div className="relative">
        <a href="#">
          <img
            src="https://picsum.photos/600/400"
            alt="Post"
            className="w-full object-cover max-h-[1000px]"
          />
        </a>
      </div>
      <PostAction />
      <Likes />
      <PostCaption />
      <PostComments />
      <AddComment />
    </article>
  );
}
