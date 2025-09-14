"use client";

import { Category, Post } from "@/domain/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import PostList from "@/components/blog-components/post-list";
import BlogFilter from "@/components/blog-components/blog-filter";

type Props = {
  initialPosts: Post[];
  categoryTree: Category[];
};

export default function FilteredBlog({ initialPosts, categoryTree }: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const params = searchParams.toString();
      try {
        const response = await fetch(`/api/search?${params}`);
        if (!response.ok) {
          throw new Error(`API call failed: ${response.status}`);
        }
        const newPosts = await response.json();
        setPosts(Array.isArray(newPosts) ? newPosts : []);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setPosts([]);
      }
    };

    startTransition(() => {
      if (searchParams.toString()) {
        fetchPosts();
      } else {
        setPosts(initialPosts);
      }
    });
  }, [searchParams, initialPosts]);

  return (
    <section>
      <BlogFilter categoryTree={categoryTree} />
      {isPending ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
        </div>
      ) : (
        <>
          {posts && posts.length > 0 ? (
            <PostList posts={posts} />
          ) : (
            <p className="mt-16 text-center text-gray-500">
              مقاله‌ای با اين مشخصات يافت نشد.
            </p>
          )}
        </>
      )}
    </section>
  );
}
