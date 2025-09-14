"use client";

import { Category } from "@/domain/types";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  category: Category;
  closeMainMenu: () => void;
};

export function MobileCategoryMenuItem({ category, closeMainMenu }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  const itemClasses =
    "w-full z-50 rounded-md p-3 text-right text-lg font-semibold hover:text-gray-600";

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeMainMenu();
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  if (!hasChildren) {
    return (
      <Link
        href={`/blog?category=${category.title}`}
        onClick={handleLinkClick}
        className={itemClasses}
      >
        {category.title}
      </Link>
    );
  }

  return (
    <div>
      <div
        className={`flex cursor-pointer items-center justify-between ${itemClasses}`}
      >
        <Link
          href={`/blog?category=${category.title}`}
          onClick={handleLinkClick}
          className="flex-grow"
        >
          {category.title}
        </Link>
        <button onClick={handleToggle} className="p-2">
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <main>
          <div className="border-r-2 border-gray-200 pr-4">
            {category.children?.map((child) => (
              <MobileCategoryMenuItem
                key={child._id}
                category={child}
                closeMainMenu={closeMainMenu}
              />
            ))}
          </div>
          <hr className="border-t-2 border-gray-200 mt-2" />
        </main>
      )}
    </div>
  );
}
