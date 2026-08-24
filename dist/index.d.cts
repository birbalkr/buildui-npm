import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    size?: "sm" | "md" | "lg";
    theme?: "primary" | "secondary" | "tertiary";
    children?: ReactNode;
}
declare const Button: ({ text, theme, size, className, children, ...props }: ButtonProps) => react.JSX.Element;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
}
declare const Input: ({ label, error, size, className, id, ...props }: InputProps) => react.JSX.Element;

export { Button, type ButtonProps, Input, type InputProps };
