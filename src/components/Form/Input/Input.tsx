import type { InputHTMLAttributes } from "react";

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<InputProps["size"]>, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
};

export const Input = ({
    label,
    error,
    size = "md",
    className = "",
    id,
    ...props
}: InputProps) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label htmlFor={id} className="mb-1 font-medium">
                    {label}
                </label>
            )}

            <input
                id={id}
                className={`rounded-md border ${sizeClasses[size]
                    } ${error ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                {...props}
            />

            {error && (
                <span className="mt-1 text-sm text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
};