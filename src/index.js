import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import DATA from './data';

ReactDOM.render(<App tasks={DATA} />, document.getElementById('root'));
