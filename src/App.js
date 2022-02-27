import React, { useState } from 'react'; 
import TodoList  from './components/TodoList';
import  TodoForm  from './components/TodoForm';
import FilterControl from './components/FilterControl';
import Footer from './components/Footer';
import { nanoid } from 'nanoid';
import './scss/main.scss';
import moon from '../src/images/icon-moon.svg';
import sun from '../src/images/icon-sun.svg';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

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

  const taskList = tasks.map(task => (
    <TodoList
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  function addTask(name) {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  
  
    return (
      <div className='wrapper'>
        <div className='container'>
          <header>
            <h1>Todo</h1>
          </header>  
          <main>
            <button className='btn theme-toggle-btn'>
              <img src={moon} alt='icon-mooon' />
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
                <FilterControl />
              </div>
              
            </section>
          
            <section className="filters mobile-filter-control  ">
                <button type="button" className="btn toggle-btn" aria-pressed="true">
                  <span className="visually-hidden">Show </span>
                  <span>all</span>
                  <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                  <span className="visually-hidden">Show </span>
                  <span>Active</span>
                  <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                  <span className="visually-hidden">Show </span>
                  <span>Completed</span>
                  <span className="visually-hidden"> tasks</span>
                </button>
            </section> 
          </main>
          <Footer />
        </div> 
      </div> // Wrapper
  );
}
  
export default App;
