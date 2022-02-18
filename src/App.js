import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import Filters from './components/Filters';


import './scss/main.scss';
 



function App(props) {
  //Rendering DATA with interation
  
  return (

    <div className='todoapp stack-large'>
      <Header />
      <Form />
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        <ToDoList />
      </ul>
      <Filters/>
      <p>Drag and drop to reorder list</p>
    </div>


  );
}

export default App;
