import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    size?: "sm" | "md" | "lg";
    theme?: "primary" | "secondary" | "tertiary";
    children?: ReactNode;
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
};

const themeClasses: Record<NonNullable<ButtonProps["theme"]>, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    tertiary: "bg-transparent text-blue-500 hover:bg-blue-100",
};

export const Button = ({
    text,
    theme = "primary",
    size = "md",
    className = "",
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`rounded-md ${sizeClasses[size]} ${themeClasses[theme]} ${className}`}
            {...props}
        >
            {children ?? text}
        </button>
    );
};