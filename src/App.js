import React from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import todoData from "./data/todoData";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todoData
    }
    this.checkBox = this.checkBox.bind(this);
  }

  checkBox(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
                completed: !todo.completed
          }
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoList = this.state.todos.map(item => <ToDoItem key={item.id} item={item} checkBox={this.checkBox}/>)

    return (
      <div className="App">
        {todoList}
      </div>
    );
  }
}

export default App;
