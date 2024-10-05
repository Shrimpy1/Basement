import {Input as NextInput, InputProps} from "@nextui-org/input";

const Input = ({className, ...props}: InputProps) => {
    return (
        <NextInput {...props} labelPlacement={'outside'} className={`z-0 ${className}`}/>
    );
};

export default Input;
