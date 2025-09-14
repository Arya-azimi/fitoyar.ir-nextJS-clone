import {
  getAllCategories,
  getFilteredPosts,
  getLatestPosts,
} from "@/lib/queries";
import LatestPosts from "@/components/blog-components/latest-posts";
import FilteredBlog from "@/components/blog-components/filtered-blog";

export default async function BlogPage() {
  const latestPosts = await getLatestPosts();
  const [initialPosts, categories] = await Promise.all([
    getFilteredPosts(),
    getAllCategories(),
  ]);

  return (
    <main>
      <LatestPosts posts={latestPosts} />
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="mb-8 text-center text-3xl font-bold">همه مقالات</h2>
        <FilteredBlog initialPosts={initialPosts} categories={categories} />
      </div>
    </main>
  );
}
