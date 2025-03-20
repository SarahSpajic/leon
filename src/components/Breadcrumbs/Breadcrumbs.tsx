"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { BaseProps } from "../shared/types";

interface BreadcrumbProps extends BaseProps {
  homeLabel?: string;
  separator?: React.ReactNode;
  containerClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  labelMapping?: Record<string, string>;
}

export function BreadCrumbs({
  homeLabel = "Home",
  separator = "/",
  containerClassName = "",
  itemClassName = "",
}: BreadcrumbProps) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");
  console.log(segments, separator);

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
