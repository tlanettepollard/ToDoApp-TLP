import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const dataList = './components/data.js';
/*const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];*/


ReactDOM.render(<App tasks={dataList} />, document.getElementById('root'));



