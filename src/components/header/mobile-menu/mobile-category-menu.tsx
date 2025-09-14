"use client";

import { Category } from "@/domain/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MobileCategoryMenuItem } from "./mobile-category-menu-item";

type Props = {
  categories: Category[];
  closeMainMenu: () => void;
};

export function MobileCategoryMenu({ categories, closeMainMenu }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md p-3 text-right text-lg font-semibold hover:bg-gray-100 "
      >
        <span>مقالات</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="border-r-2 border-gray-200 pr-4 ">
          {categories.map((category) => (
            <MobileCategoryMenuItem
              key={category._id}
              category={category}
              closeMainMenu={closeMainMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
}
