import LatestPosts from "@/components/blog-components/latest-posts";
import PostList from "@/components/blog-components/post-list";
import { getLatestPosts } from "@/lib/queries";
import { getAllPosts } from "@/lib/queries";

export default async function Blog() {
  const latestPosts = await getLatestPosts();
  const posts = await getAllPosts();

  return (
    <>
      <LatestPosts posts={latestPosts} />
      <PostList posts={posts} />
    </>
  );
}
