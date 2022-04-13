import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from '../src/App.js';


const main = document.getElementById('root')
const root = createRoot(main); // createRoot(container!) if you use TypeScript
root.render(<App />);