import React, { memo } from 'react';

import { Handle,Position,NodeProps } from 'react-flow-renderer';

export default memo(( props:NodeProps ) => {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
            />
            <div>
                Custom Color Picker Node: <strong>{props.data.color}</strong>
            </div>
            <input
                className="nodrag"
                type="color"
                onChange={ props.data.onChange }
                defaultValue={ props.data.color }
            />
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ top: 10, background: '#555' }}
            />
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ bottom: 10, top: 'auto', background: '#555' }}
            />
        </>
    );
});