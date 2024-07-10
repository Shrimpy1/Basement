'use client';

import {Node} from "@/types/Node";
import Branch from "@/components/tree/Branch";
import ConnectionMap from "@/components/tree/ConnectionMap";

const Tree = ({treeData}: { treeData: Array<Node> }) => {
    return (
        <>
            <Branch id={0} treeData={treeData}></Branch>
            <ConnectionMap treeData={treeData}></ConnectionMap>
        </>
    );
};

export default Tree;
