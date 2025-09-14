"use client";

import { Category } from "@/domain/types";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CategoryList } from "./category-list";

type Props = {
  category: Category;
};

export function CategoryItem({ category }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        href={`/blog?category=${category.title}`}
        className="flex items-center justify-between rounded-md p-3 hover:bg-gray-100"
      >
        <span>{category.title}</span>
        {hasChildren && <ChevronLeft className="h-4 w-4" />}
      </Link>

      {isHovered && hasChildren && (
        <div className="absolute right-full top-0 z-10 mr-1">
          <CategoryList categories={category.children!} />
        </div>
      )}
    </li>
  );
}
