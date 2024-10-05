import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

const Icon = ({className, ...props}: FontAwesomeIconProps) => {
    return (
        <FontAwesomeIcon
            className={`${className}`}
            {...props}
        />
    );
}

export default Icon;
