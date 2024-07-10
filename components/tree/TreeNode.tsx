import {Node} from "@/types/Node";

const TreeNode = ({person}: { person?: Node }) => {
    return (
        <>
            <div id={person?.id.toString()} className={`flex rounded-sm bg-blue-500 p-2`}>
                {person?.id == 0 ? "root" : person?.id}
            </div>
        </>
    );
};

export default TreeNode;
