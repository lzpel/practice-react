import React, {useState} from 'react';
import ReactFlow, {ArrowHeadType} from "react-flow-renderer";
import NodeIf from "./NodeIf"

const nodeTypes = {
   // selectorNode: ColorSelectorNode,jv
    if:NodeIf
};

const initialElements = [
    {
        id: '1',
        data: { label: 'Node 1' },
        position: { x: 250, y: 5 }
    },
    {
        // you can also pass a React component as a label
        id: '2',
        data: { label: <div>Node 2</div> },
        position: { x: 100, y: 100 } ,
        type:'if'
    },
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        label: 'ほげふが', labelShowBg: false,
        arrowHeadType: ArrowHeadType.ArrowClosed,
        //type: 'straight', //直線
    },
];
export default function Flow() {
    const [elements, setElements] = useState(initialElements);
    return (
        <ReactFlow
            elements={elements}
            nodeTypes={nodeTypes}
        />
    );
}