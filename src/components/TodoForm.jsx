import React from 'react';

export default function TodoForm(props) {
    return (
        <form>
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
            />
            <button type="submit" id='submitNewTodo' className="visually-hidden">
              Add
            </button>
        </form>
    );
}
