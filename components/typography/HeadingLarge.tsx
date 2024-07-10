import React from "react";

const Heading = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <h3 className={`text-2xl ${className}`}>{children}</h3>
    );
};

export default Heading;
