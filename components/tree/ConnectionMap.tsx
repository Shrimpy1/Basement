'use client';

import {useEffect, useRef, useState} from "react";
import {NodeData} from "@/types/NodeData";

export const Connection = ({parentId, childId}: { parentId: number, childId: number }) => {
    const lineRef = useRef(null);

    const updateLineCoords = () => {
        const container1 = document.getElementById(parentId.toString());
        const container2 = document.getElementById(childId.toString());
        if (!container1 || !container2) return;
        const container1Rect = container1.getBoundingClientRect();
        const container2Rect = container2.getBoundingClientRect();

        const x1 = container1Rect.left + container1Rect.width / 2;
        const y1 = container1Rect.bottom;
        const x2 = container2Rect.left + container2Rect.width / 2;
        const y2 = container2Rect.top;

        if (lineRef.current) {
            // @ts-ignore
            lineRef.current.setAttribute('x1', x1);
            // @ts-ignore
            lineRef.current.setAttribute('y1', y1);
            // @ts-ignore
            lineRef.current.setAttribute('x2', x2);
            // @ts-ignore
            lineRef.current.setAttribute('y2', y2);
        }
    };

    useEffect(() => {
        updateLineCoords();
        window.addEventListener('resize', updateLineCoords);
        return () => window.removeEventListener('resize', updateLineCoords);
    }, []);

    useEffect(() => {
        updateLineCoords();
    });

    return (
        <line ref={lineRef} stroke="white" strokeWidth="2"/>
    )
}

const ConnectionMap = ({treeData}: {
    treeData: Array<NodeData>
}) => {
    const connections: { parentId: any; childId: any; }[] = [];

    const generateConnections = (person: NodeData) => {
        if (person.children) {
            person.children.forEach(childId => {
                connections.push({parentId: person.id, childId});
                const child = treeData.find(p => p.id === childId);
                // @ts-ignore
                generateConnections(child);
            });
        }
    };

    treeData.forEach(person => {
        if (person.id === 0) {
            generateConnections(person);
        }
    });

    // const [connections, setConnections]: [{ parentId: any; childId: any; }[], any] = useState([]);
    //
    // const generateConnections = (person: Node, connections: { parentId: any; childId: any; }[]) => {
    //     if (person.children) {
    //         person.children.forEach(childId => {
    //             connections.push({parentId: person.id, childId});
    //             const child = treeData.find(p => p.id === childId);
    //             if (child) {
    //                 generateConnections(child, connections);
    //             }
    //         });
    //     }
    // };
    //
    // useEffect(() => {
    //     const newConnections: { parentId: any; childId: any; }[] = [];
    //     treeData.forEach(person => {
    //         if (person.id === 0) {
    //             generateConnections(person, newConnections);
    //         }
    //     });
    //     setConnections(newConnections);
    // }, [treeData]);


    return (
        <svg className={'absolute top-0 left-0 w-full h-full pointer-events-none'}>
            {connections.map((connection, index) => (
                <Connection key={`${connection.parentId}-${connection.childId}-${index}`} parentId={connection.parentId}
                            childId={connection.childId}/>
            ))}
        </svg>
    )
}

export default ConnectionMap;
