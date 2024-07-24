import {Input as NextInput} from "@nextui-org/input";

const Input = ({label, size, placeholder, isRequired, name, ...props}: {
    label: string,
    size: 'sm' | 'md' | 'lg',
    placeholder: string,
    isRequired: boolean,
    name: string
}) => {
    return (
        <NextInput name={name} {...props} label={label} labelPlacement={'outside'} size={size}
                   placeholder={placeholder} isRequired={isRequired}/>
    );
};

export default Input;
