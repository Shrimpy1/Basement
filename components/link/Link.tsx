import NextLink from "next/link";
import React from "react";

const Link = ({href, className, size = 'sm', children, ...props}: {
    href: string,
    className?: string,
    children?: React.ReactNode,
    size?: 'sm' | 'md' | 'lg' | 'xl'
}) => {
    let sizeClass: string = 'sm after:border-b-1';
    switch (size) {
        case "md":
            sizeClass = 'text-md after:border-b-1';
            break;
        case "lg":
            sizeClass = 'text-lg after:border-b-2';
            break;
        case "xl":
            sizeClass = 'text-xl after:border-b-2';
            break;
    }

    return (
        <div className={'relative'}>
            <NextLink href={href} {...props}
                      className={`${className} ${sizeClass} relative after:content-[''] after:w-0 after:bg-white after:absolute after:left-0 after:bottom-0 hover:after:w-full after:duration-300`}>{children}</NextLink>
        </div>
    );
};

export default Link;
