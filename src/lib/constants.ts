export type NavItem = {
  label: string;
  href: string;
  isDropdown?: boolean;
};

export const navItems: NavItem[] = [
  { label: "برنامه بدنسازی", href: "/programs" },
  { label: "برنامه غذایی", href: "/diet" },
  { label: "مقالات", href: "/blog", isDropdown: true },
  { label: "درباره ما", href: "/about-us" },
  { label: "تماس با ما", href: "/contact-us" },
];
