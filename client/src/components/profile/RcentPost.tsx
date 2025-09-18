import PostCard from "../post/PostCard";

export default function RcentPost() {
  return (
    <div className="pt-0 px-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Recent posts
      </h2>
      <div className="max-w-[560px]">
        <PostCard />
      </div>
    </div>
  );
}
