import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function ToDoList(props) {
    const taskList = props.tasks?.map(task => (
        <ToDoList id={task.id} name={task.name} completed={task.completed} />
    ));

    return (
        <ul
            className='todo-list'
            aria-labelledby='list-heading'>
        
            <FontAwesomeIcon
            className='input-icon'
            icon={faCircle} />
            
            {taskList}
        </ul>
    );
}

