import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function Form(props) {
    return (
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
    );
}

export default Form;