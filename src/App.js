import React, { useState, useRef, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import FilterButton from './components/FilterButton';
import { nanoid } from 'nanoid';

import './scss/main.scss';
//import dataList from './data';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
/*const App = (props) =>{
  const MY_TASKS = localStorage.getItem('myTasks') ? JSON.parse(localStorage.getItem('myTasks')) : dataList;*/
  const [themeLight, setThemeLight] = useState(true);
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  const themeClass = themeLight ? 'light' : 'dark';

  // Tasks Completed
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      //if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // Deleting a task
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  // Editing tasks
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  
  // Filtering tasks 
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <ToDoList
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));
  
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  
  
  // Add Task
  function addTask(name) {
    const newTask = {id: 'todo-' + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  // Counter for tasks remaining
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);


  return (

    <div className={`wrapper ${themeClass}`}>
      <Header themeLight={themeLight} setThemeLight={setThemeLight} />
      <Form addTask={addTask}/>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
      <div className='filters btn-group stack-exception'>
        <h4 id="list-heading">
          {headingText}
        </h4>
        {filterList}
      </div>
      <p>Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
