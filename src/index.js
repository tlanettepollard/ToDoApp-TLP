import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Header from './components/Header';
import ToDoList from './components/ToDoList';

import './Sass/App.scss';

ReactDOM.render(<App />, document.getElementById('root'));


export { Header, ToDoList };