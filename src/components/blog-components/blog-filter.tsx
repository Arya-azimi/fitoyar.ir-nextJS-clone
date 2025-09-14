"use client";

import { Category } from "@/domain/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MoreVertical, Search, X, ChevronDown } from "lucide-react";
import { AccordionCategoryList } from "../shared/category/accordion-category-list";

type Props = {
  categoryTree: Category[];
};

export default function BlogFilter({ categoryTree }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isDesktopCategoryOpen, setIsDesktopCategoryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams.toString());
      if (searchTerm) {
        newParams.set("search", searchTerm);
      } else {
        newParams.delete("search");
      }
      router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, pathname, router]);

  const updateQueryParams = (name: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(name, value);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  const currentSortBy = searchParams.get("sortBy") || "desc";

  return (
    <div className="mx-auto mb-8 max-w-6xl rounded-md bg-gray-200 p-4 ">
      <div className="hidden items-center justify-between gap-4 lg:flex">
        <div className="flex items-center gap-4">
          <div>
            <label htmlFor="sortBy" className="mr-2 font-semibold">
              مرتب‌سازی:
            </label>
            <select
              id="sortBy"
              name="sortBy"
              className="rounded-md border border-gray-300 bg-gray-300 p-2"
              value={currentSortBy}
              onChange={(e) => updateQueryParams("sortBy", e.target.value)}
            >
              <option value="desc">جديدترين</option>
              <option value="asc">قديمی‌ترين</option>
            </select>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDesktopCategoryOpen(!isDesktopCategoryOpen)}
              className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-300 p-2 font-semibold"
            >
              <span>انتخاب دسته‌بندی</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            {isDesktopCategoryOpen && (
              <div className="absolute top-full z-10 mt-2 rounded-lg bg-white p-2 shadow-lg  w-72">
                <AccordionCategoryList categories={categoryTree} />
              </div>
            )}
          </div>
        </div>
        <div className="relative w-[60%]">
          <input
            type="search"
            placeholder="جستجو در مقالات..."
            className="w-full rounded-md bg-gray-300 p-2 pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => updateQueryParams("sortBy", "desc")}
              className={`font-semibold ${currentSortBy === "desc" ? "text-blue-600" : ""}`}
            >
              جديدترين
            </button>
            <button
              onClick={() => updateQueryParams("sortBy", "asc")}
              className={`font-semibold ${currentSortBy === "asc" ? "text-blue-600" : ""}`}
            >
              قديمی‌ترين
            </button>
          </div>
          <button onClick={() => setIsCategoryMenuOpen(true)} className="p-2">
            <MoreVertical className="h-6 w-6" />
          </button>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="جستجو در مقالات..."
            className="w-full rounded-md bg-gray-300 p-2 pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isCategoryMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsCategoryMenuOpen(false)}
        />
        <div className="fixed top-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-lg ">
          <div className="flex items-center justify-between">
            <h3 className="text-xl">انتخاب دسته‌بندی</h3>
            <button onClick={() => setIsCategoryMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-8">
            <AccordionCategoryList categories={categoryTree} />
          </div>
        </div>
      </div>
    </div>
  );
}
