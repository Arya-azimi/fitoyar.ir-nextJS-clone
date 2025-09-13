type LinkItem = {
  label: string;
  href: string;
};

interface FooterLinkColumnProps {
  title: string;
  links: LinkItem[];
}

export function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-gray-800 pb-2 mb-4 border-b-2 border-red-500 inline-block">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-center text-gray-900 hover:text-red-500 transition-colors"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
