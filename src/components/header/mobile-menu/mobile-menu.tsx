"use client";

import { Category } from "@/domain/types";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileCategoryMenu } from "./mobile-category-menu";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  categoryTree: Category[];
};

export function MobileMenu({ isOpen, onClose, categoryTree }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 right-0 transform transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={onClose}>
            <Image
              src="https://fitoyar.ir/wp-content/uploads/2022/05/Vector-5-2.svg"
              alt="فیتویار لوگو"
              width={32}
              height={32}
            />
          </Link>
          <button onClick={onClose}>
            <X className="h-6 w-6 " />
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-2">
          <Link
            href="/"
            onClick={onClose}
            className="w-full rounded-md p-3 text-right text-lg font-semibold hover:bg-gray-100 "
          >
            صفحه اصلی
          </Link>
          <Link
            href="/program"
            onClick={onClose}
            className="w-full rounded-md p-3 text-right text-lg font-semibold hover:bg-gray-100 "
          >
            برنامه بدنسازی
          </Link>
          <MobileCategoryMenu
            categories={categoryTree}
            closeMainMenu={onClose}
          />
          <Link
            href="/about-us"
            onClick={onClose}
            className="w-full rounded-md p-3 text-right text-lg font-semibold hover:bg-gray-100 "
          >
            درباره ما
          </Link>
          <Link
            href="/contact-us"
            onClick={onClose}
            className="w-full rounded-md p-3 text-right text-lg font-semibold hover:bg-gray-100 "
          >
            تماس با ما
          </Link>
        </nav>
      </div>
    </div>
  );
}
