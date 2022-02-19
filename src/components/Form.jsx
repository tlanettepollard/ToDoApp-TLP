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
        <form onSubmit={handleSubmit}>
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
                value={name}
                onChange={handleChange}
        />
      </form>
    );
}

export default Form;