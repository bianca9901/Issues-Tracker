"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoBugSharp } from "react-icons/io5";
import classNames from "classnames";

function NavBar() {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBugSharp />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-500 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
