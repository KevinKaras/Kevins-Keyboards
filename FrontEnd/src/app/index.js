import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import store from "./store.js";
import { Provider } from "react-redux";

const main = document.getElementById('root')
const root = createRoot(main); 
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    );