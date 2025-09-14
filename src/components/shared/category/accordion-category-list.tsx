"use client";

import { Category } from "@/domain/types";
import { AccordionCategoryItem } from "./accordion-category-item";

type Props = {
  categories: Category[];
};

export function AccordionCategoryList({ categories }: Props) {
  return (
    <div className="flex w-full flex-col items-start">
      {categories.map((category) => (
        <AccordionCategoryItem key={category._id} category={category} />
      ))}
    </div>
  );
}
