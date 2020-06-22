import React from 'react';

const ToDoItem = props =>

    <div className="list-group-item">
        <input type="checkbox" checked={props.item.completed} onChange={() => props.checkBox(props.item.id)}/>
        <span>{props.item.text}</span>
        <br></br>
        <hr></hr>
    </div>

export default ToDoItem;