import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import Filters from './components/Filters';

import './scss/main.scss';
//import dataList from './data';



function App(props) {
/*const App = (props) =>{
  const MY_TASKS = localStorage.getItem('myTasks') ? JSON.parse(localStorage.getItem('myTasks')) : dataList;*/
  
  const taskList = props.tasks.map(task => (
    <ToDoList id={task.id} name={task.name} completed={task.completed} key={task.id} />));

  return (

    <div className='todoapp stack-large'>
      <Header />
      <Form />
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
      <div className='filters btn-group stack-exception'>
        <Filters />
      </div>
      <p>Drag and drop to reorder list</p>
    </div>


  );
}

export default App
