import { getAllCategories, getFilteredPosts } from "@/lib/queries";
import LatestPosts from "@/components/blog-components/latest-posts";
import FilteredBlog from "@/components/blog-components/filtered-blog";

export default async function BlogPage() {
  const [initialPosts, categories] = await Promise.all([
    getFilteredPosts(),
    getAllCategories(),
  ]);

  return (
    <main>
      <LatestPosts />
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-center text-3xl font-bold">همه مقالات</h2>
        <FilteredBlog initialPosts={initialPosts} categories={categories} />
      </div>
    </main>
  );
}
