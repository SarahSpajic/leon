import { ReactNode } from "react";

export interface BaseProps {
    children?: ReactNode;
    className?: string;
}

export interface IconProps {
    icon?: string | ReactNode;
    iconPosition?: 'left' | 'right'
}

export interface LinkProps {
    href: string;
    external?: boolean;
    onClick?: () => void;
}