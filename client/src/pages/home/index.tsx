import React from "react";
import PostCard from "../../components/post/PostCard";

export default function Home(): React.ReactElement {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <PostCard />
    </div>
  );
}
