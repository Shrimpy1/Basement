import React from "react";

const Title = ({className, children}: { className?: string, children?: React.ReactNode }) => {
    return (
        <h1 className={`text-5xl ${className}`}>{children}</h1>
    );
};

export default Title;
