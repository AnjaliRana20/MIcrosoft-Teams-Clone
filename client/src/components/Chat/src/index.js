
// Render Chat App here

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Backend for Chat App
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
