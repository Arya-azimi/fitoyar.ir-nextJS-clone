"use client";

import { Category, Post } from "@/domain/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import BlogFilter from "./blog-filter";
import PostList from "./post-list";
import { Loader2 } from "lucide-react";

type Props = {
  initialPosts: Post[];
  categories: Category[];
};

export default function FilteredBlog({ initialPosts, categories }: Props) {
  const [posts, setPosts] = useState(initialPosts);
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const params = searchParams.toString();
      const response = await fetch(`/api/search?${params}`);
      const newPosts = await response.json();
      setPosts(newPosts);
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
      <BlogFilter categories={categories} />
      {isPending ? (
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
