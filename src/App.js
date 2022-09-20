import './css/App.css';
import React, {Suspense, useContext, useState} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from "./pages/Home";
import './App.js';
import { TaskContext } from "./context";
import { tasksDefault } from "./context/tasks";

function App() {
    const [tasks, setTasks] = useState(tasksDefault.tasks);
    const [coords, setCoords] = useState(tasksDefault.coords);


    return (
        <div className="App">
            <Provider store={store}>
                <TaskContext.Provider value={{
                    tasks,
                    setTasks,
                    coords,
                    setCoords,
                }}>
                    <HashRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                        </Routes>
                    </HashRouter>
                </TaskContext.Provider>
            </Provider>
        </div>
    );
}

export default App;