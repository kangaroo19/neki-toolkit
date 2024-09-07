import React from "react";
interface NekiButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const NekiButton: React.FC<NekiButtonProps>;
export default NekiButton;
