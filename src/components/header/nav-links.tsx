import { Category } from "@/domain/types";
import Link from "next/link";
import CategoryMegaMenu from "./category-mega-menu";

type Props = {
  categoryTree: Category[];
};

export function NavLinks({ categoryTree }: Props) {
  return (
    <nav className="w-full max-w-2xl lg:max-w-4xl">
      <ul className="flex items-center justify-center gap-x-6 bg-gray-100 shadow-md border-t border-gray-200 rounded-b-2xl px-8 py-3">
        <li>
          <Link href="/" className="text-black ">
            صفحه اصلی
          </Link>
        </li>
        <li>
          <CategoryMegaMenu categoryTree={categoryTree} />
        </li>
        <li>
          <Link href="/about-us" className="text-black ">
            درباره ما
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="text-black ">
            تماس با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
}
