import type { InputHTMLAttributes } from "react";

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<InputProps["size"]>, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
};

export const Input = ({
    label,
    size = "md",
    className = "",
    id,
    ...props
}: InputProps) => {
    return (
        <div className="flex flex-col pt-10">
            {label && (
                <label htmlFor={id} className="mb-1 text-sm font-bold text-gray-700">
                    {label.toUpperCase()}
                </label>
            )}
            <input
                id={id}
                placeholder={`Enter your ${props.placeholder || label}`}
                className={`rounded-md border outline-none ${sizeClasses[size]
                    } ${className}`}
                {...props}
            />
        </div>
    );
};