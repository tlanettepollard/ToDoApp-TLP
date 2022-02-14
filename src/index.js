import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Header from './components/Header';
import ToDoList from './components/ToDoList';

import './Sass/App.scss';


const DATA = [
    { id: 'todo-0', name:'Make hair appointment', completed: true }, 
    { id: 'todo-1', name: 'Vacuum', completed: false },
    { id: 'todo-2', name: 'Pick up groceries', completed: false },
    { id: 'todo-3', name: 'Wash clothes', completed: false },
    { id: 'todo-4', name: 'Sort mail', completed: false },
    { id: 'todo-5', name: 'Take cats to the vet', completed: false },
]

ReactDOM.render(<App tasks={DATA} />, document.getElementById('root'));


export { Header, ToDoList };