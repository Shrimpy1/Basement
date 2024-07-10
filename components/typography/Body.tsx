import React from "react";

const Body = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <div className={`text-base ${className}`}>{children}</div>
    );
};

export default Body;
