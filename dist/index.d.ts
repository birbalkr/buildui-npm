import * as React from 'react';
import React__default, { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    size?: "sm" | "md" | "lg";
    theme?: "primary" | "secondary" | "tertiary";
    children?: ReactNode;
}
declare const Button: ({ text, theme, size, className, children, ...props }: ButtonProps) => React.JSX.Element;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    size?: "sm" | "md" | "lg";
}
declare const Input: ({ label, size, className, id, ...props }: InputProps) => React.JSX.Element;

interface AlertProps extends React__default.HTMLAttributes<HTMLDivElement> {
    text?: string;
    size?: "sm" | "md" | "lg";
    children?: React__default.ReactNode;
    type?: "success" | "info" | "warning" | "error" | "danger" | "neutral" | "loading" | "announcement" | "update" | "confirmation" | "offline" | "security" | "maintenance";
}
declare const Alert: ({ text, size, type, className, children, ...props }: AlertProps) => React__default.JSX.Element;

declare const AlertContainer: () => React__default.JSX.Element;

/**
 * Imperative Alert API
 */
declare const alert: {
    success(message: string): number;
    info(message: string): number;
    warning(message: string): number;
    error(message: string): number;
    danger(message: string): number;
    neutral(message: string): number;
    loading(message: string): number;
    announcement(message: string): number;
    update(message: string): number;
    confirmation(message: string): number;
    offline(message: string): number;
    security(message: string): number;
    maintenance(message: string): number;
    dismiss(id: number): void;
    clear(): void;
};

export { Alert, AlertContainer, type AlertProps, Button, type ButtonProps, Input, type InputProps, alert };
