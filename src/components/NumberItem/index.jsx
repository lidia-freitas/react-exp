import React from 'react';
import './styles.css';
import { useDrag } from 'react-dnd';

export default function NumberItem(props) {
    const [{ opacity }, drag] = useDrag({
        item: { type: props.type, value: props.value, sourceId: props.sourceId },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.4 : 1
        }),
    });

    return (
        <span ref={drag} className="number-item" style={{ opacity }}>
            { props.value}
            { props.type}
        </span>
    )
}
