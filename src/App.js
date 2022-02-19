import React, { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import Filters from './components/Filters';
import { nanoid } from 'nanoid';

import './scss/main.scss';
//import dataList from './data';



function App(props) {
/*const App = (props) =>{
  const MY_TASKS = localStorage.getItem('myTasks') ? JSON.parse(localStorage.getItem('myTasks')) : dataList;*/
  const [tasks, setTasks] = useState(props.tasks);
  
  const taskList = tasks.map(task => (
    <ToDoList id={task.id} name={task.name} completed={task.completed} key={task.id} />));
  
  function addTask(name) {
    const newTask = {id: 'todo-' + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (

    <div className='todoapp stack-large'>
      <Header />
      <Form addTask={addTask}/>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
      <div className='filters btn-group stack-exception'>
        <h2 id="list-heading">
          {headingText}
        </h2>
        <Filters />
      </div>
      <p>Drag and drop to reorder list</p>
    </div>


  );
}

export default App;
