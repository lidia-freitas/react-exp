import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';
import NumberType from './types/NumberType';
import StageType from './types/StageType';
import Stage from './components/Stage';

function App() {
    const stages = [
        {
            id: 1,
            accepts: [NumberType.NUMBER, NumberType.EVEN, NumberType.ODD],
            type: StageType.SOURCE,
            droppedNumbers: [
                { id: 1, type: NumberType.EVEN, originType: StageType.SOURCE, value: 0 },
                { id: 2, type: NumberType.ODD, originType: StageType.SOURCE, value: 1 },
                { id: 3, type: NumberType.EVEN, originType: StageType.SOURCE, value: 2 },
                { id: 4, type: NumberType.ODD, originType: StageType.SOURCE, value: 3 },
                { id: 5, type: NumberType.EVEN, originType: StageType.SOURCE, value: 4 },
                { id: 6, type: NumberType.ODD, originType: StageType.SOURCE, value: 5 },
                { id: 7, type: NumberType.EVEN, originType: StageType.SOURCE, value: 6 },
                { id: 8, type: NumberType.ODD, originType: StageType.SOURCE, value: 7 },
                { id: 9, type: NumberType.EVEN, originType: StageType.SOURCE, value: 8 },
                { id: 10, type: NumberType.ODD, originType: StageType.SOURCE, value: 9 },
                { id: 11, type: NumberType.EVEN, originType: StageType.SOURCE, value: 10 },
                { id: 12, type: NumberType.ODD, originType: StageType.SOURCE, value: 11 },
                { id: 13, type: NumberType.EVEN, originType: StageType.SOURCE, value: 12 }
            ]
        },
        { id: 2, accepts: [NumberType.NUMBER, NumberType.EVEN], type: StageType.TARGET, droppedNumbers: [] },
        { id: 3, accepts: [NumberType.NUMBER, NumberType.ODD], type: StageType.TARGET, droppedNumbers: [] },
    ];


    return (
        <div className="main-container">
            <DndProvider backend={HTML5Backend}>
                <div className="stages-container">
                    {stages.map(item =>
                        <Stage
                            accepts={item.accepts}
                            type={item.type}
                            droppedNumbers={item.droppedNumbers}
                            key={item.id}>
                        </Stage>
                    )}
                </div>
            </DndProvider>
        </div>
    );
}

export default App;
