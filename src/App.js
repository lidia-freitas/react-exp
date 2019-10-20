import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import './App.css';
import NumberTypes from './types/NumberTypes';
import Stage from './components/Stage';
import NumberItem from './components/NumberItem';

function App() {
    const [numbers, setNumbers] = useState([
        { type: NumberTypes.EVEN, value: 0, sourceId: 0, removed: false },
        { type: NumberTypes.ODD, value: 1, sourceId: 0, removed: false },
        { type: NumberTypes.EVEN, value: 2, sourceId: 0, removed: false },
        { type: NumberTypes.ODD, value: 3, sourceId: 0, removed: false },
        { type: NumberTypes.EVEN, value: 4, sourceId: 0, removed: false },
        { type: NumberTypes.ODD, value: 5, sourceId: 0, removed: false },
        { type: NumberTypes.EVEN, value: 6, sourceId: 0, removed: false },
        { type: NumberTypes.ODD, value: 7, sourceId: 0, removed: false },
        { type: NumberTypes.EVEN, value: 8, sourceId: 0, removed: false },
        { type: NumberTypes.ODD, value: 9, sourceId: 0, removed: false },
        { type: NumberTypes.EVEN, value: 10, sourceId: 0, removed: false },
        { type: NumberTypes.ODD, value: 11, sourceId: 0, removed: false },
        { type: NumberTypes.EVEN, value: 12, sourceId: 0, removed: false }
    ]);

    const [stages, setStages] = useState([
        { id: 1, accepts: [NumberTypes.EVEN], droppedNumbers: [] },
        { id: 2, accepts: [NumberTypes.ODD], droppedNumbers: [] }
    ]);

    const dropHandler = (item, stageIndex) => {
        const numberIndex = numbers.findIndex(x => x.value === item.value);

        setNumbers(
            update(numbers, {
                [numberIndex]: {
                    removed: { $set: true }
                }
            }));

        setStages(
            update(stages, {
                [stageIndex]: {
                    droppedNumbers: {
                        $push: [item]
                    }
                }
            }));

        return {
            targetId: stages[stageIndex].id
        }
    };

    return (
        <div className="main-container">
            <DndProvider backend={HTML5Backend}>
                <div className="stages-container">
                    <div className="stage-box">
                        {numbers.map((item, index) =>
                            <NumberItem
                                type={item.type}
                                value={item.value}
                                removed={item.removed}
                                sourceId={item.sourceId}
                                key={index}
                            />
                        )}
                    </div>

                    {stages.map((item, index) =>
                        <Stage
                            id={item.id}
                            accepts={item.accepts}
                            droppedNumbers={item.droppedNumbers}
                            onDrop={(item) => dropHandler(item, index)}
                            key={index}
                        />
                    )}
                </div>
            </DndProvider>
        </div>
    );
}

export default App;
