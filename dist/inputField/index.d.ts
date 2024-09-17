import { CSSProperties } from "react";
interface NekiInputFieldProps {
    onChange?: () => void;
    type?: "text" | "password";
    style?: CSSProperties;
    className?: string;
    registerFn?: any;
    placeholder?: string;
    defaultValue?: string;
    id?: string;
}
export default function NekiInputField({ onChange, type, style, className, registerFn, placeholder, defaultValue, id, }: NekiInputFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
