import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import Filters from './components/Filters';

import './scss/main.scss';

function App() {
  
  return (
    <div className='todoapp stack-large'>
      <Header />
      <Form />
      <ul>
        <ToDoList name='Eat' completed={true}/>
        <ToDoList name='Sleep' completed={false} />
        <ToDoList name='Walk' completed={false}/>
      <Filters/>
      </ul>
      <p>Drag and drop to reorder list</p>
    </div>


  );
}

export default App;
