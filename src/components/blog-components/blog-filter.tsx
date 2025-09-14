"use client";

import { Category } from "@/domain/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MoreVertical, Search, X } from "lucide-react";

type Props = {
  categories: Category[];
};

export default function BlogFilter({ categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

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

  const currentCategory = searchParams.get("category") || "all";
  const currentSortBy = searchParams.get("sortBy") || "desc";

  return (
    <div className="mx-auto mb-8 max-w-6xl rounded-md bg-gray-200 p-4">
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
          <div>
            <label htmlFor="category" className="mr-2 font-semibold">
              دسته‌بندی:
            </label>
            <select
              id="category"
              name="category"
              className="rounded-md border border-gray-300 bg-gray-300 p-2"
              value={currentCategory}
              onChange={(e) => updateQueryParams("category", e.target.value)}
            >
              <option value="all">همه</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
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

      <div className="flex flex-col gap-4 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => updateQueryParams("sortBy", "desc")}
              className={`font-semibold ${
                currentSortBy === "desc" ? "text-blue-600" : ""
              }`}
            >
              جديدترين
            </button>
            <button
              onClick={() => updateQueryParams("sortBy", "asc")}
              className={`font-semibold ${
                currentSortBy === "asc" ? "text-blue-600" : ""
              }`}
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
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isCategoryMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsCategoryMenuOpen(false)}
        />
        <div className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-gray-200 p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">انتخاب دسته‌بندی</h3>
            <button onClick={() => setIsCategoryMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <button
              onClick={() => {
                updateQueryParams("category", "all");
                setIsCategoryMenuOpen(false);
              }}
              className="w-full rounded-md p-3 text-right text-lg hover:bg-gray-300 "
            >
              همه دسته‌بندی‌ها
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => {
                  updateQueryParams("category", cat.title);
                  setIsCategoryMenuOpen(false);
                }}
                className="w-full rounded-md p-3 text-right text-lg hover:bg-gray-300 "
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
