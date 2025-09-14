"use client";

import { Category } from "@/domain/types";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  category: Category;
  onHover: () => void;
};

export default function CategoryMenuItem({ category, onHover }: Props) {
  const hasChildren = category.children && category.children.length > 0;

  return (
    <li onMouseEnter={onHover} className="relative">
      <Link
        href={`/blog?category=${category.title}`}
        className="flex items-center justify-between rounded-md p-3 hover:bg-gray-100 "
      >
        <span>{category.title}</span>
        {hasChildren && <ChevronLeft className="h-4 w-4" />}
      </Link>
    </li>
  );
}
