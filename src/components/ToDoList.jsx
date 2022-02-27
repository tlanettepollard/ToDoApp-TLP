import React from 'react';
import crossIcon from '../images/icon-cross.svg';
import editIcon from '../images/icons8-edit.svg';

export default function ToDoList(props) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    <img src={editIcon} alt='icon-edit' /> <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}>
                    <img src={crossIcon} alt='icon-cross' /> <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
}