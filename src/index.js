import './css/App.css';
import  React, { Suspense } from "react";
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from "./pages/Home";
import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);