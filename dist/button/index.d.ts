import { CSSProperties, ReactNode } from "react";
interface NekiButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children?: ReactNode;
    type?: "button" | "submit" | "reset";
    style?: CSSProperties;
    className?: string;
}
export default function NekiButton({ onClick, disabled, children, type, style, className, }: NekiButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
