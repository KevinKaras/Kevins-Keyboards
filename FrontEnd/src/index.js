import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
import configureStore from './store/index.js'
// import './index.css';
import App from '../src/App.js';

// const store = configureStore()
ReactDOM.render(
    <React.StrictMode>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById('root')
  );