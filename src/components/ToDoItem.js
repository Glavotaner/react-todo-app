import React from 'react';

const ToDoItem = props =>

    <div className="list-group-item">
        <input type="checkbox" checked={props.item.completed}/>
        <span>{props.item.text}</span>
        <br></br>
        <span style={{display: !props.item.completed && "none"}}>Complete!</span>
        <hr></hr>
    </div>

export default ToDoItem;