import { ReactNode } from "react";
interface NekiFormProps {
    children?: ReactNode;
    className?: string;
    onSubmit?: any;
    control: any;
    onError?: (errors: any) => void;
    onSuccess?: () => void;
}
export default function NekiForm({ children, className, onSubmit, control, onError, onSuccess, }: NekiFormProps): import("react/jsx-runtime").JSX.Element;
export {};
