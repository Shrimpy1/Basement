import React from "react";

const Display = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <h4 className={`text-3xl ${className}`}>{children}</h4>
    );
};

export default Display;
