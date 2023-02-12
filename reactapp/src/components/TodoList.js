import React, { useState } from 'react';
import "./css/TodoList.css";

function AddListItem(){
    const val = document.getElementById("input").value;
    document.getElementById("list").innerHTML += "<li>" + val + "</li>"
}
function TodoList(){
    return (
        <>
            <h1>Todo List</h1>
            <ul id="list">
                <input id="input" type="text" placeholder="Enter list item..."></input><button onClick={() => AddListItem()}>Submit!</button>
            </ul>
        </>
    )
}

export default TodoList;