import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';

import './styles.css';
import NumberType from '../../types/NumberType';
import StageType from '../../types/StageType';
import NumberItem from '../NumberItem';
import localStorageHelper from '../../helpers/local-storage-helper';

const Stage = ({ id, accepts, type, droppedNumbers }) => {
    const [numbers, setNumbers] = useState(droppedNumbers);

    useEffect(() => {
        const stageList = localStorageHelper.getState();
        stageList.find(item => item.id === id).droppedNumbers = numbers;

        localStorageHelper.setState(stageList);
    }, [id, numbers]);

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: accepts,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        drop: (item) => insertItem(item)
    });

    const insertItem = (item) => {
        const valueType = item.value % 2 ? NumberType.ODD : NumberType.EVEN;

        setNumbers(
            update(numbers, {
                $push: [{
                    ...item,
                    type: item.originType === StageType.SOURCE ? NumberType.NUMBER : valueType,
                    originType: type
                }]
            }));
    };

    const removeItem = (item) => {
        const index = numbers.findIndex(x => x.id === item.id);

        setNumbers(
            update(numbers, {
                $splice: [[index, 1]]
            }));
    };

    return (
        <div ref={drop} className="stage-box">
            {numbers.map((item) =>
                <NumberItem
                    id={item.id}
                    type={item.type}
                    originType={item.originType}
                    value={item.value}
                    removeItem={(item) => removeItem(item)}
                    key={item.id}
                />
            )}
        </div>
    );
};

export default Stage;
