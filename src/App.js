import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';



function App() {
  
  return (
    <div className='todoapp stack-large'>
      <h1>Todo</h1>
      <form>
        <FontAwesomeIcon
          className='input-icon'
          icon={faCircle}
        />
        <input 
          type='text'
          id='new-todo-input'
          className='input input__lg'
          name="text"
          autoComplete='off'
          placeholder='Create a new todo...'
        />
      </form>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <FontAwesomeIcon
              className='input-icon'
              icon={faCircle}
            />
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <FontAwesomeIcon
              className='input-icon'
              icon={faCircle}
            />
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <FontAwesomeIcon
              className='input-icon'
              icon={faCircle}
            />
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
        </li>
      </ul>

      <div className="filters btn-group 
      stack-exception">
        <h2 id="list-heading">
          3 tasks remaining
        </h2>
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>All</span>
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
      </div>

      <p>Drag and drop to reorder list</p>
    </div>


  );
}

export default App;
