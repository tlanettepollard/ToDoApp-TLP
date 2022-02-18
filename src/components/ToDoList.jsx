import React from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


export default function ToDoList(props) {
    const checkIcon = '/src/images/icon-check.svg';
    const crossIcon = '/src/images/icon-cross.svg';


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
                    <img src={checkIcon} alt="check-icon"></img>
                    <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                    <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                    </label>
                </div>
                <button>
                    <img src={crossIcon} alt="delete-icon"></img>
                </button>
                
            </div>
      </div>
    );
}
