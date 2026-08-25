import React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  type?:
    | "success"
    | "info"
    | "warning"
    | "error"
    | "danger"
    | "neutral"
    | "loading"
    | "announcement"
    | "update"
    | "confirmation"
    | "offline"
    | "security"
    | "maintenance";
}

const sizeClasses = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const typeClasses = {
  success: "border-green-500 bg-green-50 text-green-800",
  info: "border-blue-500 bg-blue-50 text-blue-800",
  warning: "border-yellow-500 bg-yellow-50 text-yellow-800",
  error: "border-red-500 bg-red-50 text-red-800",
  danger: "border-red-700 bg-red-100 text-red-900",
  neutral: "border-gray-400 bg-gray-50 text-gray-800",
  loading: "border-purple-500 bg-purple-50 text-purple-800",
  announcement: "border-indigo-500 bg-indigo-50 text-indigo-800",
  update: "border-pink-500 bg-pink-50 text-pink-800",
  confirmation: "border-orange-500 bg-orange-50 text-orange-800",
  offline: "border-gray-500 bg-gray-100 text-gray-800",
  security: "border-red-500 bg-red-50 text-red-800",
  maintenance: "border-slate-500 bg-slate-50 text-slate-800",
};

export const Alert = ({
  text,
  size = "md",
  type = "info",
  className = "",
  children,
  ...props
}: AlertProps) => {
  return (
    <div
      {...props}
      role="alert"
      className={[
        "w-full rounded-lg border",
        "flex items-start gap-3",
        sizeClasses[size],
        typeClasses[type],
        className,
      ].join(" ")}
    >
      <div className="flex-1">
        {text && <div className="font-semibold">{text}</div>}

        {children && <div className={text ? "mt-1" : ""}>{children}</div>}
      </div>
    </div>
  );
};
