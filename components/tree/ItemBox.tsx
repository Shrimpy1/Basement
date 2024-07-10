import {Node} from "@/types/Node";
import Body from "@/components/typography/Body";

const ItemBox = ({person, className}: { person: Node, className?: string }) => {
    return (
        <>
            <div className={`flex flex-col h-20 w-36 bg-blue-200 ${className}`}>
                <div className={'flex'}>
                    <Body className={'font-bold'}>Name:</Body>
                    <Body className={'ml-2'}>{person.name}</Body>
                </div>
            </div>
        </>
    );
};

export default ItemBox;
