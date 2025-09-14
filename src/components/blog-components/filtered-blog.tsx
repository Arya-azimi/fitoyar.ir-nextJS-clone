"use client";

import { Category, Post } from "@/domain/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogFilter from "./blog-filter";
import PostList from "./post-list";
import { Loader2 } from "lucide-react";

type Props = {
  initialPosts: Post[];
  categories: Category[];
};

export default function FilteredBlog({ initialPosts, categories }: Props) {
  const [posts, setPosts] = useState(initialPosts);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    const sortBy = searchParams.get("sortBy") || "desc";
    const search = searchParams.get("search") || "";

    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/search?category=${category}&sortBy=${sortBy}&search=${search}`
        );
        const newPosts: Post[] = await response.json();
        setPosts(newPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setPosts(initialPosts);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchParams.toString()) {
      fetchPosts();
    } else {
      setPosts(initialPosts);
    }
  }, [searchParams, initialPosts]);

  return (
    <section className="max-w-6xl">
      <BlogFilter categories={categories} />

      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-gray-500" />
        </div>
      ) : (
        <>
          {posts.length > 0 ? (
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
