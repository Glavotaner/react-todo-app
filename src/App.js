import React from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import todos from "./data/todoData";


function App() {

  const todoList = todos.map(item => <ToDoItem key={item.id} item={item}/>)

  return (
    <div className="App">
      <fieldset>
        {todoList}
      </fieldset> 
    </div>
  );
}

export default App;
