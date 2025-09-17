import React from "react";
import PostCard from "../../components/post/PostCard";
import CreatePost from "../../components/post/CreatePost";

export default function Home(): React.ReactElement {
  return (
    <div className="min-h-screen max-w-[560px] mx-auto">
      <CreatePost />
      <PostCard />
    </div>
  );
}
