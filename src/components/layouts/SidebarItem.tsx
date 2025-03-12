"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { BaseProps, LinkProps, IconProps } from "../shared/types";

interface SidebarItemProps extends BaseProps, IconProps, LinkProps {
  badge?: string | number;
  disabled?: boolean;
  collapsed?: boolean;
  active?: boolean;
}

export function SidebarItem({
  href,
  icon,
  children,
  badge,
  external = false,
  disabled = false,
  className = "",
  onClick,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const itemClasses = `sidebar-item ${isActive ? `sidebar-item-active` : ""} ${
    disabled ? "sidebar-item-disabled" : ""
  } ${className}`;

  const itemContent = (
    <>
      {icon && <span className="sidebar-icon">{icon}</span>}
      <span className="sidebar-label">{children}</span>
      {badge && <span className="sidebar-badge">{badge}</span>}
    </>
  );

  if (disabled) {
    return <div className={itemClasses}>{itemContent}</div>;
  }
  if (external) {
    return (
      <a href={href} className={itemClasses} target="_blank" onClick={onClick}>
        {itemContent}
      </a>
    );
  }
  return (
    <Link href={href} className={itemClasses} onClick={onClick}>
      {itemContent}
    </Link>
  );
}
