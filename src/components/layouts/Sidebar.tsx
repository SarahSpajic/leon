"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarSection } from "./SidebarSection";
import { SidebarItem } from "./SidebarItem";

interface SidebarProps {
  className?: string;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export function Sidebar({
  className = "",
  defaultCollapsed = false,
  onCollapsedChange,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const pathname = usePathname();

  const handleToggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onCollapsedChange?.(newState);
  };

  return (
    <aside
      className={`sidebar ${
        isCollapsed ? "sidebar-collapsed" : ""
      } ${className}`}
    >
      <div className="sidebar-header">
        <Link href="/" className="sidebar-logo">
          <h1 className="sidebar-title">Study Hub</h1>
        </Link>
        <button
          className="sidebar-toggle"
          onClick={handleToggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          type="button"
        >
          {isCollapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="sidebar-nav">
        <SidebarItem href="/" icon="🏠" collapsed={isCollapsed}>
          Dashboard
        </SidebarItem>

        <SidebarSection title="Courses">
          <SidebarItem
            href="/hci"
            icon="📚"
            active={pathname.startsWith("/hci")}
          >
            HCI
          </SidebarItem>
          <SidebarItem
            href="/accounting"
            icon="🧮"
            active={pathname.startsWith("/accounting")}
          >
            Accounting
          </SidebarItem>
        </SidebarSection>

        <SidebarSection title="Tools">
          <SidebarItem
            href="/career"
            icon="💼"
            active={pathname.startsWith("/career")}
          >
            Career Development
          </SidebarItem>
          <SidebarItem
            href="/accounting/quiz"
            icon="✏️"
            active={pathname === "/accounting/quiz"}
          >
            Accounting Quiz
          </SidebarItem>
        </SidebarSection>
      </nav>

      <div className="sidebar-footer">
        <SidebarItem
          href="/settings"
          icon="⚙️"
          active={pathname === "/settings"}
        >
          Settings
        </SidebarItem>
      </div>
    </aside>
  );
}
