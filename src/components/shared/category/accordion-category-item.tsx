"use client";

import { Category } from "@/domain/types";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AccordionCategoryList } from "./accordion-category-list";

type Props = {
  category: Category;
};

export function AccordionCategoryItem({ category }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  const itemClasses =
    "flex w-full items-center justify-between rounded-md p-3 text-right text-base font-semibold hover:bg-gray-100 ";

  if (!hasChildren) {
    return (
      <Link href={`/blog?category=${category.title}`} className={itemClasses}>
        {category.title}
      </Link>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${itemClasses} text-right`}
      >
        <span>{category.title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="flex flex-col border-r-2 border-gray-200 pr-4 ml-3 ">
          <Link
            href={`/blog?category=${category.title}`}
            className="w-full rounded-md p-3 text-right text-sm font-semibold italic text-gray-600 hover:bg-gray-100 "
          >
            همه {category.title}
          </Link>
          <AccordionCategoryList categories={category.children!} />
        </div>
      )}
    </div>
  );
}
