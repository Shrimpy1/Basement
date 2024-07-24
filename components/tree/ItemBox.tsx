import Body from "@/components/typography/Body";
import {ReactNode} from "react";

const ItemBox = ({className, children}: {
    className?: string,
    children?: ReactNode
}) => {
    return (
        <>
            <div className={`flex bg-cyan-400/30 p-2 ${className}`}>
                <Body>{children}</Body>
            </div>
        </>
    );
};

export default ItemBox;
