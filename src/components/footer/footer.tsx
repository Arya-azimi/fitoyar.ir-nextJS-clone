import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FooterLinkColumn } from "./footer-link-column";

const productLinks = [
  { label: "مکمل بدنسازی", href: "#" },
  { label: "وسایل بدنسازی", href: "#" },
  { label: "دمبل", href: "#" },
  { label: "هالتر", href: "#" },
  { label: "لباس ورزشی", href: "#" },
  { label: "تردمیل", href: "#" },
];

const importantLinks = [
  { label: "صفحه اصلی", href: "/" },
  { label: "وبلاگ", href: "/blog" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
  { label: "صفحه کاربری", href: "/dashboard" },
  { label: "فروشگاه", href: "/shop" },
];

export function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto flex justify-center bg-gray-50 mt-6">
      <div className="w-full max-w-6xl bg-gray-100 p-8 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right">
          {/* ستون اول: درباره ما */}
          <div className="space-y-4">
            <Image
              src="https://fitoyar.ir/wp-content/uploads/2022/05/Vector-5-2.svg"
              alt="فیتویار لوگو"
              width={50}
              height={50}
            />
            <div className="relative pr-4">
              <div className="absolute top-0 right-0 h-full w-0.5 bg-red-500 rounded-full"></div>
              <p className="text-black leading-relaxed text-justify">
                ما یک تیم از ورزشکاران حرفه‌ای هستیم که سال‌ها در عرصه ورزش
                فعالیت کرده‌ایم و به خوبی می‌دانیم که داشتن تجهیزات با کیفیت و
                علم روز چقدر در پیشرفت و بهبود عملکرد ورزشکاران تأثیر دارد.
              </p>
            </div>
          </div>

          <FooterLinkColumn title="دسته بندی محصولات" links={productLinks} />

          <FooterLinkColumn title="لینک های مهم" links={importantLinks} />

          <div className="w-full">
            <h3 className="text-lg font-bold text-gray-800 pb-2 mb-4 border-b-2 border-red-500 inline-block">
              با ما در ارتباط باشید
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="text-red-500 ml-3" size={20} />
                <span className="text-black">fitoyar@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-red-500 ml-3" size={20} />
                <span className="text-black">۰۹۳۸۷۲۱۵۶۵۵</span>
              </li>
              <li className="flex items-center">
                <MapPin className="text-red-500 ml-3" size={20} />
                <span className="text-black">تهران</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 pb-2 mt-8 mb-4 border-b-2 border-red-500 inline-block">
              به ما اعتماد کنید
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
