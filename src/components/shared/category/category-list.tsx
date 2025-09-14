"use client";

import { Category } from "@/domain/types";
import { CategoryItem } from "./category-item";

type Props = {
  categories: Category[];
};

export function CategoryList({ categories }: Props) {
  return (
    <div className="rounded-lg bg-white shadow-lg">
      <ul className="w-56 p-2">
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </ul>
    </div>
  );
}
