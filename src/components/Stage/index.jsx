import React from 'react';
import './styles.css';
import { useDrop } from 'react-dnd';
import NumberItem from '../NumberItem';

export default function Stage(props) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: props.accept,
        drop: props.onDrop,
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div ref={drop} className="stage-box">
            {props.numbers.map((item, index) =>
                <NumberItem
                    type={item.type}
                    value={item.value}
                    sourceId={item.sourceId}
                    key={index}
                />)}
        </div>
    );
}
