import React, { FC } from 'react';
import './App.scss';

const App: FC = () => {
    const timer = 0;

    console.log(process.env.REACT_APP_MODE);

    return (
        <div className="app">
            {timer}
        </div>
    );
};

export default App;
