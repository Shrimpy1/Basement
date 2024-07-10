import {Node} from "@/types/Node";
import Tree from "@/components/tree/Tree";

const famTree = () => {
    const data = [
        {
            id: 0,
            children: [1, 2, 8]
        },
        {
            id: 1,
            children: [3, 4, 5]
        },
        {
            id: 2,
            children: [6, 7]
        },
        {
            id: 3,
            children: []
        },
        {
            id: 4,
            children: []
        },
        {
            id: 5,
            children: []
        },
        {
            id: 6,
            children: []
        },
        {
            id: 7,
            children: []
        },
        {
            id: 8,
            children: []
        }
    ]

    return (
        <>
            <Tree treeData={data}></Tree>
        </>
    )
}

export default famTree;
