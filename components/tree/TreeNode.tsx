import {NodeData} from "@/types/NodeData";
import Body from "@/components/typography/Body";
import ItemBox from "@/components/tree/ItemBox";

const TreeNode = ({data}: { data: NodeData }) => {
    return (
        <div id={data.id.toString()} className={`flex flex-col items-center rounded-sm bg-cyan-600 p-4 gap-3`}>
            {data.id === 0 && <Body className={'uppercase'}>root</Body>}
            {(data.motherName || data.fatherName) && (
                <div className="flex gap-3">
                    {data.fatherName &&
                        <ItemBox>{data.fatherName}</ItemBox>
                    }
                    {data.motherName &&
                        <ItemBox>{data.motherName}</ItemBox>
                    }
                </div>
            )}
        </div>
    );
};

export default TreeNode;
