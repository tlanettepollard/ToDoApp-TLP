import React from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


export default function ToDoList(props) {
    //const checkIcon = '/src/images/icon-check.svg';
    //const crossIcon = '/src/images/icon-cross.svg';


    return (

        <div
        className="stack-small"
        >
            <div className="todo stack-small">
                
                <div className="c-cb">
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input
                        id={props.id}
                        type="checkbox"
                        defaultChecked={props.completed}
                        onChange={() => props.toggleTaskCompleted(props.id)}
                    />
                    <label
                        className="todo-label"
                        htmlFor={props.id}>
                        {props.name}
                    </label>
                </div>
                <button
                    type='button'
                    className='btn btn__danger'
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className='visually-hidden'>
                       {props.name}
                    </span>
                </button>
                
            </div>
      </div>
    );
}
