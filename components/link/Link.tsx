import {Link as NextUILink, LinkProps} from "@nextui-org/link";
import React from "react";

type CustomButtonProps = LinkProps & {
    size?: 'sm' | 'md' | 'lg' | 'xl',
}
const Link = ({className, color = 'foreground', size = 'sm', children, ...props}: CustomButtonProps) => {
    let sizeClass: string = 'sm after:h-0.5';
    let underlineClass: string = ''

    switch (size) {
        case "md":
            sizeClass = 'text-md after:h-0.5';
            break;
        case "lg":
            sizeClass = 'text-lg after:h-0.5';
            break;
        // @ts-ignore
        case "xl":
            sizeClass = 'text-xl after:h-0.5';
            break;
    }

    switch (color) {
        case 'primary':
            underlineClass = 'after:bg-primary'
            break
        case 'secondary':
            underlineClass = 'after:bg-secondary'
            break
        case 'foreground':
            underlineClass = 'after:bg-foreground'
            break
        case 'success':
            underlineClass = 'after:bg-success'
            break
        case 'warning':
            underlineClass = 'after:bg-warning'
            break
        case 'danger':
            underlineClass = 'after:bg-danger'
            break
        default:
            underlineClass = 'after:bg-primary'
            break
    }

    return (
        <div className={'relative'}>
            <NextUILink {...props} color={color}
                        className={`${className} ${sizeClass} ${underlineClass} relative after:content-[''] after:w-0 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:duration-300 after:ease-in`}>
                {children}
            </NextUILink>
        </div>
    );
};

export default Link;
