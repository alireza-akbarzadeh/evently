"use client";
import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavItems = () => {
  const pathname = usePathname();
  const activePathName = (link: string) => link === pathname;

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((header) => (
        <li key={header.label}>
          <Link
            className={cn("flex-center p-medium-16 whitespace-nowrap", {
              "text-primary-500 font-bold": activePathName(header.route),
            })}
            href={header.route}
          >
            {header.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
