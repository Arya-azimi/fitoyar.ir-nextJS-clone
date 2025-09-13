import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import { navItems } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
                    ${
                      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Image
              src="https://fitoyar.ir/wp-content/uploads/2022/05/Vector-5-2.svg"
              alt="فیتویار لوگو"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            <button onClick={onClose} className="cursor-pointer">
              <X size={24} />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex justify-between items-center w-full p-4 rounded-lg text-lg font-medium text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.isDropdown && (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
