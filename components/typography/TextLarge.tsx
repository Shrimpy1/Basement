import React from "react";

const TextLarge = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <div className={`text-xl ${className}`}>{children}</div>
    );
};

export default TextLarge;
