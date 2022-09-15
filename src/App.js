import './css/App.css';
import  React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from "./pages/Home";
import './App.js';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;