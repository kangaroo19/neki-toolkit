import React from "react";
interface NekiButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
    className?: string;
}
declare const NekiButton: React.FC<NekiButtonProps>;
export default NekiButton;
