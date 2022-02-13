import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function ToDoList (props) {
    return (
        <ul
            className='todo-list'
            aria-labelledby='list-heading'>
            <li className='todo'>
                <FontAwesomeIcon
                    className='input-icon'
                    icon={faCircle} />
                <input id='todo-5' type='checkbox' defaultChecked={true} />
                <label className='todo-label' htmlFor='todo-5'>
                    {props.name}
                </label>
            </li>
        </ul>
    );
}

