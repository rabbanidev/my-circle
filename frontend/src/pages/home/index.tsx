import React from "react";
import PostCard from "../../components/post/PostCard";
import CreatePost from "../../components/post/CreatePost";

export default function Home(): React.ReactElement {
  return (
    <div className="min-h-screen mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <CreatePost />
          <PostCard />
        </div>
        <div className="md:col-span-4 md:text-right">Extera features.</div>
      </div>
    </div>
  );
}
