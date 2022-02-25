import React from 'react';
import TodoList from './components/TodoList';
import './scss/main.scss';
import moon from '../src/images/icon-moon.svg';
import sun from '../src/images/icon-sun.svg';

function App(props) {
  
    return (
      <div className='wrapper'>
        <div className='container'>
          <header>
            <h1>Todo</h1>
            <button className='btn theme-toggle-btn'>
              <img src={moon} alt='icon-mooon' />
              <img src={sun} alt='icon-sun' />
            </button>
          </header>  
          <form>
            <label htmlFor="new-todo-input" className="label visually-hidden">
            Add New Todo
            </label>
            <input
              type="text"
              id="todoInput"
              className="todo-input"
              name="todo-input"
              placeholder='Create a new todo...'
              autoComplete="off"
            />
            <button type="submit" id='submitNewTodo' className="visually-hidden">
              Add
            </button>
            </form>
          <section className='todo-list-section'>
            
            <ul
              className="todo-list"
              aria-labelledby="list-heading"
            >
              <TodoList name='Eat' completed={true} id='todo-0' />
              <TodoList name='Sleep' completed={false} id='todo-1'/>
              <TodoList name='Repeat' completed={false} id='todo-2'/>
                
            </ul>
          
              <div className='filter-control'>
                <div className='todos-count'>3 tasks remaining
                </div>
                <div className='control-btn desktop-filter-control btn-group'>
                  All Active completed
                </div>
                <div className='control-btn'>
                  <button className='btn'>
                    Clear Completed
                  </button>
                </div>
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
            
        </div>
      </div>
  );
}
  
export default App;
