import React from 'react';
import { useDrag } from 'react-dnd';

import './styles.css';

const NumberItem = ({ type, value, sourceId, removed }) => {

    const [{ isDragging, display }, drag] = useDrag({
        item: { type, value, sourceId },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            display: removed ? 'none' : 'initial'
        }),
        end: (item, monitor) => {
            if(monitor.didDrop()){
            }
        }
    });

    return (
        <span ref={drag} className="number-item" style={{display}}>
             {removed ? <s>{value}</s> : value}
        </span>
    )
};

export default NumberItem;
