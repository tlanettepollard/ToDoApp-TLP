import React from 'react';
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
                <li className="todo stack-small">
                  <div className="c-cb">
                    <input id="todo-0" type="checkbox" defaultChecked={true} />
                    <label className="todo-label" htmlFor="todo-0">
                      Eat
                    </label>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn">
                      Edit <span className="visually-hidden">Eat</span>
                    </button>
                    <button type="button" className="btn btn__danger">
                      Delete <span className="visually-hidden">Eat</span>
                    </button>
                  </div>
                </li>
                <li className="todo stack-small">
                    <div className="c-cb">
                    <input id="todo-1" type="checkbox" />
                    <label className="todo-label" htmlFor="todo-1">
                      Sleep
                    </label>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn">
                      Edit <span className="visually-hidden">Sleep</span>
                      </button>
                      <button type="button" className="btn btn__danger">
                      Delete <span className="visually-hidden">Sleep</span>
                      </button>
                    </div>
                </li>
                <li className="todo stack-small">
                  <div className="c-cb">
                    <input id="todo-2" type="checkbox" />
                    <label className="todo-label" htmlFor="todo-2">
                      Repeat
                    </label>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn">
                      Edit <span className="visually-hidden">Repeat</span>
                    </button>
                    <button type="button" className="btn btn__danger">
                      Delete <span className="visually-hidden">Repeat</span>
                    </button>
                  </div>
                </li>
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
