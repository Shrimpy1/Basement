import {Node} from "@/types/Node";
import TreeNode from "@/components/tree/TreeNode";
import {Connection} from "@/components/tree/ConnectionMap";

const Branch = ({id, treeData}: { id: number, treeData: Node[] }) => {
    const person = treeData.find(person => person.id == id)
    const numChildren = person?.children?.length;

    return (
        <div className={'flex flex-col items-center w-full'}>
            <TreeNode person={person}></TreeNode>
            <div className={'mt-10 flex justify-center gap-x-5 w-full'}>
                {person?.children?.map(childId =>
                    <>
                        <Connection parentId={person?.id} childId={childId}/>
                        <div style={{width: `1/${numChildren}`}} className={'relative'} key={childId}>
                            <Branch id={childId} treeData={treeData}></Branch>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Branch;
