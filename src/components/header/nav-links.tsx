"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/lib/constants";

export function NavLinks() {
  return (
    <nav className="w-full max-w-4xl  ">
      <div className="bg-gray-200 border-t border-gray-300 backdrop-blur-sm rounded-b-2xl p-3 flex justify-center items-center">
        <ul className="flex items-center gap-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className=" cursor-pointer flex items-center gap-x-1 text-gray-800 font-medium hover:text-red-500 transition-colors"
              >
                {item.label}
                {item.isDropdown && <ChevronDown size={16} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
