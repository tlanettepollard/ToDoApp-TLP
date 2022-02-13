import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';




const ToDoList = () => {
    return (
        <div>
            <ul 
                className='todo-list'
                aria-labelledby='list-heading'
            >
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-0' type='checkbox' defaultChecked={true} />
                    <label className='todo-label' htmlFor='todo-0'>
                        Pick up groceries
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-1' type='checkbox' defaultChecked={true} />
                    <label className='todo-label' htmlFor='todo-1'>
                        Take Shinxley and Mozeley to the vet
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-2' type='checkbox' defaultChecked={true} />
                    <label className='todo-label' htmlFor='todo-2'>
                        Vacuum 
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-3' type='checkbox' defaultChecked={true} />
                    <label className='todo-label' htmlFor='todo-3'>
                        Wash clothes
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-4' type='checkbox' defaultChecked={true} />
                    <label className='todo-label' htmlFor='todo-4'>
                        Make doctor's appointment
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-5' type='checkbox' defaultChecked={true} />
                    <label className='todo-label' htmlFor='todo-5'>
                        Make hair appointment with Jenice. 
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default ToDoList;