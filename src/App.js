import React from 'react';
import { Header } from './index';
import { ToDoList } from './index';




function App() {
  return (
    <div>
      <div>
        <Header />
        <ToDoList name='Make hair appointment'/>
        <ToDoList name='Vacuum'/>
        <ToDoList name='Pick up groceries'/>
        <ToDoList name='Wash clothes'/>
        <ToDoList name='Sort mail'/>
        <ToDoList name='Take cats to the vet'/>
      </div>
    </div>

  );
}

export default App;
