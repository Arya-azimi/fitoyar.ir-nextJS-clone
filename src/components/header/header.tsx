"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import { NavLinks } from "./nav-links";
import { useState } from "react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="w-full flex justify-center p-4">
        <div className="w-full max-w-6xl">
          <div className="md:hidden bg-gray-200 backdrop-blur-sm rounded-2xl p-5 flex justify-between items-center">
            <button
              className=" cursor-pointer p-2 hover:bg-gray-300 rounded-lg"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} className="text-gray-800" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                <Image
                  src="https://fitoyar.ir/wp-content/uploads/2022/05/Vector-5-2.svg"
                  alt="فیتویار لوگو"
                  width={40}
                  height={40}
                  className="h-10 w-10 cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex items-center gap-x-2">
              <button className="bg-white rounded-lg p-2 hover:bg-gray-300 transition-colors cursor-pointer">
                <User size={20} className="text-gray-700" />
              </button>
              <button className="bg-white hidden rounded-lg p-2 hover:bg-gray-300 transition-colors relative cursor-pointer">
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  ۰
                </div>
                <ShoppingCart size={20} className="text-gray-700" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <div className="w-full bg-gray-200 backdrop-blur-sm rounded-2xl p-5 flex justify-between items-center">
              <Link href="/">
                <Image
                  src="https://fitoyar.ir/wp-content/uploads/2022/05/Vector-5-2.svg"
                  alt="فیتویار لوگو"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </Link>
              <div className="flex-grow"></div>
              <div className="flex items-center gap-x-2">
                <button className="font-bold cursor-pointer border-1 border-red-600 flex items-center gap-x-2 bg-white rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white transition-colors">
                  <User size={18} />
                  <span>ورود / عضویت</span>
                </button>
                <button className="cursor-pointer hidden items-center gap-x-2 bg-white rounded-lg px-4 py-2 text-sm font-medium text-gray-700 border border-red-500 relative hover:bg-red-50 transition-colors">
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    ۰
                  </div>
                  <ShoppingCart size={18} />
                  <span>۰ تومان</span>
                </button>
              </div>
            </div>
            <NavLinks />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
