"use client";

import { useState } from "react";
import { BaseProps } from "../shared/types";

interface SidebarSectionProps extends BaseProps {
  title: string;
  defaultOpen?: boolean;
  collapsible?: boolean;
}

export function SidebarSection({
  title,
  children,
  defaultOpen = true,
  collapsible = true,
  className = "",
}: SidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`sidebar-secton ${className}`}>
      <button
        className="sidebar-section-header"
        onClick={() => collapsible && setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
      >
        <span className="sidebar-section-title">{title}</span>
        {collapsible && (
          <span className="sidebar-section-icon">{isOpen ? "▼" : "►"}</span>
        )}
      </button>

      {isOpen && <div className="sidebar-section-content">{children}</div>}
    </div>
  );
}
