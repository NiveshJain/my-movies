"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="p-4 text-white">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        return (
          <span key={href}>
            {" / "}
            <Link
              href={href}
              className={isLast ? "font-bold" : "hover:underline"}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
