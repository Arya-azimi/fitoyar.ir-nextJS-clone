import { getCategoriesWithHierarchy, getFilteredPosts } from "@/lib/queries";
import { buildCategoryTree } from "@/lib/utils";
import LatestPosts from "@/components/blog-components/latest-posts";
import FilteredBlog from "@/components/blog-components/filtered-blog";

export default async function BlogPage() {
  const [initialPostsResult, flatCategories] = await Promise.all([
    getFilteredPosts(),
    getCategoriesWithHierarchy(),
  ]);

  const initialPosts = Array.isArray(initialPostsResult)
    ? initialPostsResult
    : [];
  const categoryTree = buildCategoryTree(flatCategories || []);

  return (
    <main>
      <LatestPosts />
      <div className="max-w-6xl mx-auto p-4">
        <FilteredBlog initialPosts={initialPosts} categoryTree={categoryTree} />
      </div>
    </main>
  );
}
