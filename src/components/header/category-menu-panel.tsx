"use client";

import { Category } from "@/domain/types";
import { useState } from "react";
import CategoryMenuItem from "./category-menu-item";

type Props = {
  categories: Category[];
};

export default function CategoryMenuPanel({ categories }: Props) {
  const [activeSubMenu, setActiveSubMenu] = useState<Category | null>(null);

  return (
    <div className="relative rounded-lg border bg-white shadow-lg">
      <ul className="w-56 p-2">
        {categories.map((category) => (
          <CategoryMenuItem
            key={category._id}
            category={category}
            onHover={() => setActiveSubMenu(category)}
          />
        ))}
      </ul>
      {activeSubMenu?.children && activeSubMenu.children.length > 0 && (
        <div className="absolute left-full top-0 ml-1">
          <CategoryMenuPanel categories={activeSubMenu.children} />
        </div>
      )}
    </div>
  );
}
