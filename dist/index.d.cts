import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    size?: "sm" | "md" | "lg";
    theme?: "primary" | "secondary" | "tertiary";
    children?: ReactNode;
}
declare const Button: ({ text, theme, size, className, children, ...props }: ButtonProps) => react.JSX.Element;

export { Button, type ButtonProps };
