import React, { useState } from 'react'; 
import TodoList  from './components/TodoList';
import  TodoForm  from './components/TodoForm';
import FilterControl from './components/FilterControl';
import Footer from './components/Footer';
import { nanoid } from 'nanoid';
import './scss/main.scss';
import moon from '../src/images/icon-moon.svg';
import sun from '../src/images/icon-sun.svg';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed, 
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All'); 
  

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

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

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
    <TodoList
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
    <FilterControl
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  
  function addTask(name) {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
    FILTER_MAP('all');
  };
  
    return (
      <div className='wrapper'>
        <div className='container'>
          <header>
            <h1>Todo</h1>
          </header>  
          <main>
            <button className='btn theme-toggle-btn'>
              <img src={moon} alt='icon-moon' />
              <img src={sun} alt='icon-sun' />
            </button>
          
            <TodoForm addTask={addTask}/>
            <section className='todo-list-section'>
            
              <ul
                className="todo-list"
                aria-labelledby="list-heading"
              >
                {taskList}   
              </ul>
              
              <div className='filter-control'>
                <h2 id='list-heading'>{headingText}</h2>
                {filterList}
                 <div className='control-btn clear-btn'>
                    <button
                      type='button'
                      className='btn'
                      onClick={clearCompletedTasks}
                    >
                      Clear Completed
                    </button>
                  </div>
              </div>
            </section>
          
            {/* For Mobile */}
            <section className="filters mobile-filter-control">
              {filterList}
              <div className='control-btn clear-btn'>
                  <button
                    type='button'
                    className='btn'
                    onClick={clearCompletedTasks}
                  >
                    Clear Completed
                  </button>
                </div>
            </section> 
          </main>
          <Footer />
        </div> 
      </div> // Wrapper
  );
}
  
export default App;
