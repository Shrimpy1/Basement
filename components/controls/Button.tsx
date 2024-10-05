import {Button as NextButton, ButtonProps} from "@nextui-org/button";

const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <NextButton className={`${className}`} {...props}>
            {children}
        </NextButton>
    );
};

export default Button;
