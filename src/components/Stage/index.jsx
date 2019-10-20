import React from 'react';
import { useDrop } from 'react-dnd';

import './styles.css';
import NumberItem from '../NumberItem';

const Stage = ({ id, accepts, droppedNumbers, onDrop }) => {

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: accepts,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        drop: onDrop
    });


    return (
        <div ref={drop} className="stage-box">
            {droppedNumbers.map((item, index) =>
                <NumberItem
                    type={item.type}
                    value={item.value}
                    sourceId={item.sourceId}
                    key={index}
                />
            )}
        </div>
    );
};

export default Stage;
