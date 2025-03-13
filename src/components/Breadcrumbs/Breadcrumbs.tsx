"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  homeLabel?: string;
  separator?: React.ReactNode;
  containerClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  labelMapping?: Record<string, string>;
}

export function BreadCrumbs({
  homeLabel = "Home",
  //   separator = "/",
  containerClassName = "",
  itemClassName = "",
}: //   activeItemClassName = "",
//   labelMapping = {},
BreadcrumbProps) {
  const pathname = usePathname();

  //   const segments = pathname.split("/").filter((segment) => segment !== "");

  if (pathname === "/") {
    return null;
  }
  return (
    <div>
      <ul>
        {containerClassName}
        <li className={itemClassName}>
          <Link href={"/"}>{homeLabel}</Link>
        </li>
      </ul>
    </div>
  );
}
