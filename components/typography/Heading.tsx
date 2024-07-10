import React from "react";

const Heading = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <h2 className={`text-xl ${className}`}>{children}</h2>
    );
};

export default Heading;
