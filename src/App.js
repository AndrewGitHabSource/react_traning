import logo from './logo.svg';
import './App.css';
import Area from './components/Area';
import Menu from "./components/Menu";
import TimeLine from "./components/TimeLine";
import React, {useEffect, useState} from 'react';
import {TaskContext} from "./context";

function App() {
    const [taskArray, setTaskArray] = useState([
        {
            "id": 1,
            "title": "Start last task today",
            "x": 0,
            "y": 0,
            "drag": false,
            "relation": 3,
            "selected": false,
            "active": true,
            "show": true,
            "date": '08.09.2022',
        },
        {
            "id": 2,
            "title": "Complete task #4789",
            "x": 200,
            "y": 200,
            "drag": false,
            "relation": 1,
            "selected": false,
            "active": true,
            "show": true,
            "date": '08.09.2022',
        },
        {
            "id": 3,
            "title": "Complete task #4874",
            "x": 450,
            "y": 450,
            "drag": false,
            "relation": 2,
            "selected": false,
            "active": true,
            "show": true,
            "date": '08.09.2022',
        },
        {
            "id": 4,
            "title": "Complete task #4874",
            "x": 500,
            "y": 700,
            "drag": false,
            "relation": 2,
            "selected": false,
            "active": true,
            "show": true,
            "date": '09.09.2022',
        },
    ]);

    return (
        <TaskContext.Provider value={{
            taskArray,
            setTaskArray,
        }}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} width={120} height={120} className="App-logo" alt="logo" />
                </header>

                <div className={'container'}>
                    <Menu/>

                    <div className={'content'}>
                        <TimeLine/>

                        <Area name="area"/>
                    </div>
                </div>
            </div>
        </TaskContext.Provider>
    );
}

export default App;
