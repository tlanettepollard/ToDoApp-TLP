import React from 'react';
import TodoList  from './components/TodoList';
import  TodoForm  from './components/TodoForm';
import FilterControl from './components/FilterControl';
import Footer from './components/Footer';
import './scss/main.scss';
import moon from '../src/images/icon-moon.svg';
import sun from '../src/images/icon-sun.svg';

function App(props) {
  const taskList = props.tasks?.map(task => (
    <TodoList id={task.id} name={task.name} completed={task.completed} key={task.id}/>
  ));
  
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
          
            <TodoForm />
            <section className='todo-list-section'>
            
              <ul
                className="todo-list"
                aria-labelledby="list-heading"
              >
                {taskList}   
              </ul>
            
                <div className='filter-control'>
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
