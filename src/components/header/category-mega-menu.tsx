"use client";

import { Category } from "@/domain/types";
import { useState } from "react";
import CategoryMenuPanel from "./category-menu-panel";
import Link from "next/link";

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
      <Link href="/blog" className="text-black transition-colors">
        مقالات
      </Link>
      {isOpen && (
        <div className="absolute top-full pt-2">
          <CategoryMenuPanel categories={categoryTree} />
        </div>
      )}
    </div>
  );
}
