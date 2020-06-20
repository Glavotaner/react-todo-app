import React from 'react';

const ToDoItem = props =>

    <div className="list-group-item">
        <input type="checkbox" checked={props.todos.completed ? "true" : ""}/>
        <span>{props.todos.text}</span>
        <br></br>
        <span style={{display: !props.todos.completed && "none"}}>Complete!</span>
        <hr></hr>
    </div>

export default ToDoItem;