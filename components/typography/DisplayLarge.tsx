import React from "react";

const DisplayLarge = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <h4 className={`text-4xl ${className}`}>{children}</h4>
    );
};

export default DisplayLarge;
