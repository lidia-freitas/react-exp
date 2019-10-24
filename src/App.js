import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './App.css';

import Stage from './components/Stage';
import data from './data';
import localStorageHelper from './helpers/local-storage-helper';

function App() {
    const [stages, setStages] = useState([]);

    useEffect(() => {
        if (localStorageHelper.getState() === null) {
            localStorageHelper.setState(data);
        }
        setStages(localStorageHelper.getState());
    }, []);

    return (
        <div className="main-container">
            <DndProvider backend={HTML5Backend}>
                <div className="stages-container">
                    {stages.map(item =>
                        <Stage
                            id={item.id}
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
