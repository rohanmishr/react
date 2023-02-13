import { useState } from 'react';
import "./css/TodoList.css";

function TodoList(){
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    return (
        <>
            <h1>Todo List</h1>
            <ul id="list">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input id="input" type="text" placeholder="Enter list item..." text={text} onChange={(e) => setText(e.target.value)}></input>
            <button onClick={() => {
                setItems([...items, text]);
                setText("");
            }}>Submit!</button>
        </>
    )
}

export default TodoList;