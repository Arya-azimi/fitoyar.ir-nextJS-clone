"use client";

import { Category } from "@/domain/types";
import { useState } from "react";
import Link from "next/link";
import { CategoryList } from "@/components/shared/category/category-list";
type Props = {
  categoryTree: Category[];
};

export default function CategoryMegaMenu({ categoryTree }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/blog"
        className="text-gray-700 hover:text-red-500 transition-colors"
      >
        مقالات
      </Link>
      {isOpen && (
        <div className="absolute top-full pt-2 z-10">
          <CategoryList categories={categoryTree} />
        </div>
      )}
    </div>
  );
}
