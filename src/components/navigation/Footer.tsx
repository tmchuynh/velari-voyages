import { navbarItems } from "@/lib/utils/info/navigation";
import Link from "next/link";

export default function Footer() {
  const getGroupedFooterLinks = () => {
    return navbarItems
      .filter((item) => item.dropdown) // Only use dropdown items for grouped sections
      .map((item) => ({
        section: item.label,
        links: item.dropdown!,
      }));
  };

  const additionalLinks = navbarItems.filter(
    (item) => !item.dropdown && item.label !== "Home"
  );

  return (
    <footer className="bg-white/5 backdrop-blur-md mt-20 py-12 border-white/20 border-t">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-auto w-10/12 md:w-11/12">
        {getGroupedFooterLinks().map(({ section, links }) => (
          <div key={section}>
            <h4 className="mb-3 font-semibold text-white">{section}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-blue-300 underline-offset-4 hover:underline transition-colors hover:translate-x-1 duration-200 decoration-blue-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="mb-3 font-semibold text-white">More</h4>
          <ul className="space-y-2">
            {additionalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href || "#"}
                  className="text-gray-300 text-sm hover:text-blue-300 transition-colors hover:translate-x-1 duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-white/20 border-t text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Velari Voyages. All rights reserved.
      </div>
    </footer>
  );
}
