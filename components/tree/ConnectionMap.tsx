'use client';

import {useEffect, useRef} from "react";
import {Node} from "@/types/Node";

export const Connection = ({parentId, childId}: { parentId: number, childId: number }) => {
    const lineRef = useRef(null);

    const updateLineCoords = () => {
        const container1 = document.getElementById(parentId.toString());
        const container2 = document.getElementById(childId.toString());
        const container1Rect = container1.getBoundingClientRect();
        const container2Rect = container2.getBoundingClientRect();

        const x1 = container1Rect.left + container1Rect.width / 2;
        const y1 = container1Rect.bottom;
        const x2 = container2Rect.left + container2Rect.width / 2;
        const y2 = container2Rect.top;

        if (lineRef.current) {
            lineRef.current.setAttribute('x1', x1);
            lineRef.current.setAttribute('y1', y1);
            lineRef.current.setAttribute('x2', x2);
            lineRef.current.setAttribute('y2', y2);
        }
    };

    useEffect(() => {
        updateLineCoords();
        window.addEventListener('resize', updateLineCoords);
        return () => window.removeEventListener('resize', updateLineCoords);
    }, []);

    return (
        <line ref={lineRef} stroke="white" strokeWidth="2"/>
    )
}

const ConnectionMap = ({treeData}: { treeData: Array<Node> }) => {
    const connections: { parentId: any; childId: any; }[] = [];

    const generateConnections = (person: Node) => {
        if (person.children) {
            person.children.forEach(childId => {
                connections.push({parentId: person.id, childId});
                const child = treeData.find(p => p.id === childId);
                generateConnections(child);
            });
        }
    };

    treeData.forEach(person => {
        if (person.id === 0) {
            generateConnections(person);
        }
    });

    return (
        <svg className={'absolute top-0 left-0 w-full h-full pointer-events-none'}>
            {connections.map((connection, index) => (
                <Connection key={index} parentId={connection.parentId} childId={connection.childId}/>
            ))}
        </svg>
    )
}

export default ConnectionMap;
