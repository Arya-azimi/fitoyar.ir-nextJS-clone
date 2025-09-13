import { Post } from "@/domain";
import PostCard from "./post-card";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
