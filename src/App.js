import React, {Component} from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import todoData from "./data/todoData";


class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: todoData
    }
  }

  render() {
    const todoList = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)

    return (
      <div className="App">
        {todoList}
      </div>
    );
  }
}

export default App;
