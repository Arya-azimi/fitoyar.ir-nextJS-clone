"use client";

import { Category } from "@/domain/types";
import CategoryMenuItem from "./category-menu-item";

type Props = {
  categories: Category[];
};

export default function CategoryMenuPanel({ categories }: Props) {
  return (
    <div className="relative z-10 bg-white shadow-lg">
      <ul className="w-56">
        {categories.map((category) => (
          <CategoryMenuItem key={category._id} category={category} />
        ))}
      </ul>
    </div>
  );
}
