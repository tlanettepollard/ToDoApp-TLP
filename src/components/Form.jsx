import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function Form(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName('');
    }

    return (
        <div className='form-container'> 
            <form onSubmit={handleSubmit}>
                <FontAwesomeIcon
                    className='form-icon'
                    icon={faCircle}
                />
                <label htmlFor='todoInput' className='visually-hidden'>Add New Todo</label>
                <input 
                    type='text'
                    id='new-todo-input'
                    className='input input__lg'
                    name="text"
                    autoComplete='off'
                    placeholder='Create a new todo...'
                    value={name}
                    onChange={handleChange}
                />
            </form>
            
        </div>
    );
}

export default Form;