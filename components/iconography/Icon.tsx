import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const Icon = ({icon, ...props}: { icon: IconProp }) => {
    return (
        <FontAwesomeIcon icon={icon} {...props}/>
    );
}

export default Icon;
