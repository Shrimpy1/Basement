import React from "react";

const TextLarger = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <div className={`text-2xl ${className}`}>{children}</div>
    );
};

export default TextLarger;
