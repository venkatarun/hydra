import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className='dndflow'>
            <aside>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                    Input Node
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                    Default Node
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                    Output Node
                </div>
            </aside>
        </div>
    );
};
