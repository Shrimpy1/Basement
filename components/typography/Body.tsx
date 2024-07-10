import React from "react";

const Body = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <>
            <p className={`text-base ${className}`}>{children}</p>
        </>
    );
};

export default Body;
