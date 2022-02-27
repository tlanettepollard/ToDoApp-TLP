import React, { useState } from 'react';

export default function TodoForm(props) {
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
            <label htmlFor="new-todo-input" className="label visually-hidden">
            Add New Todo
            </label>
            <input
              type="text"
              id="todoInput"
              className="todo-input"
              name="todo-input"
              placeholder='Create a new todo...'
              autoComplete="off"
              value={name}
              onChange={handleChange}
            />
            <button type="submit" id='submitNewTodo' className="visually-hidden">
              Add
            </button>
        </form>
    );
}
