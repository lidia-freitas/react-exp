import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';

import NumberTypes from './types/NumberTypes';
import Stage from './components/Stage';

function App() {
    const settingUp = [
        { type: NumberTypes.ODD, value: 1, sourceId: 0 },
        { type: NumberTypes.EVEN, value: 2, sourceId: 0 },
        { type: NumberTypes.ODD, value: 3, sourceId: 0 },
        { type: NumberTypes.EVEN, value: 4, sourceId: 0 },
        { type: NumberTypes.ODD, value: 5, sourceId: 0 },
        { type: NumberTypes.EVEN, value: 6, sourceId: 0 },
        { type: NumberTypes.ODD, value: 7, sourceId: 0 },
        { type: NumberTypes.EVEN, value: 8, sourceId: 0 },
        { type: NumberTypes.ODD, value: 9, sourceId: 0 },
        { type: NumberTypes.EVEN, value: 10, sourceId: 0 },
        { type: NumberTypes.ODD, value: 11, sourceId: 0 },
        { type: NumberTypes.EVEN, value: 12, sourceId: 0 }
    ];

    const [stages, setStages] = useState([
        { id: 0, accepts: [NumberTypes.ODD, NumberTypes.EVEN], droppedNumbers: settingUp },
        { id: 1, accepts: [NumberTypes.EVEN], droppedNumbers: [] },
        { id: 2, accepts: [NumberTypes.ODD], droppedNumbers: [] }
    ]);

    const handleDrop = (selectedNumber, stageTarget) => {

    };

    return (
        <div className="main-container">
            <DndProvider backend={HTML5Backend}>
                <div className="stages-container">
                    {stages.map((item, index) => (
                        <Stage
                            accept={item.accepts}
                            numbers={item.droppedNumbers}
                            onDrop={(selectedNumber) => handleDrop(selectedNumber, item)}
                            key={index}
                        />))}
                </div>
            </DndProvider>
        </div>
    );
}

export default App;
