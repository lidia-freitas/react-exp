import React from 'react';
import { useDrag } from 'react-dnd';

import './styles.css';

const NumberItem = ({ id, type, originType, value, removeItem }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id, type, originType, value },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => {

            if (monitor.didDrop()) {
                removeItem(item);
            }
        }
    });

    return (
        <span ref={drag} className="number-item odd-number">
             {value}
        </span>
    )
};

export default NumberItem;
