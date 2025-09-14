import {
  getAllCategories,
  getFilteredPosts,
  getLatestPosts,
} from "@/lib/queries";
import PostList from "@/components/blog-components/post-list";
import BlogFilter from "@/components/blog-components/blog-filter";
import LatestPosts from "@/components/blog-components/latest-posts";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function BlogPage({ searchParams }: Props) {
  const latestPosts = await getLatestPosts();
  const category =
    typeof searchParams.category === "string" ? searchParams.category : "all";
  const sortBy =
    typeof searchParams.sortBy === "string" ? searchParams.sortBy : "desc";

  const [posts, categories] = await Promise.all([
    getFilteredPosts(category, sortBy),
    getAllCategories(),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">مقالات فيتويار</h1>

      <LatestPosts posts={latestPosts} />

      <BlogFilter categories={categories} />

      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p className="text-center text-gray-500">
          مقاله‌ای با اين مشخصات يافت نشد.
        </p>
      )}
    </div>
  );
}
