import React from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


export default function ToDoList() {
    return (
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
    );
}
