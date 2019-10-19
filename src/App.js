import React from 'react';
import './App.css';

import SourceBox from './components/SourceBox/index';
import TargetBox from './components/TargetBox';

function App() {
    return (
        <div className="main-container">
            <div className="targets-container">
                <TargetBox type="odd"/>
                <TargetBox type="even"/>
            </div>

            <div className="source-container">
                <SourceBox/>
            </div>
        </div>
    );
}

export default App;
