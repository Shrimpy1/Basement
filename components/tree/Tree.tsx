import {NodeData} from "@/types/NodeData";
import Branch from "@/components/tree/Branch";
import ConnectionMap from "@/components/tree/ConnectionMap";
import {getAll} from "@/app/db";

const Tree = async () => {
    let data: NodeData[] | undefined = await getAll();

    if (!data) {
        return
    }

    return (
        <>
            <Branch id={0} treeData={data}></Branch>
            <ConnectionMap treeData={data}></ConnectionMap>
        </>
    );
};

export default Tree;
