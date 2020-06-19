import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowTodos = () => {

    const [currentTodos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(todos => setTodos(todos));
    }, []);

    return(
        <div>
            <h1>To Do:</h1>
            {currentTodos.map(currentTodo => (
                // console.log(currentTodo.id);
                // return
                <div>
                <ul>
                    <li key={currentTodo.id} className="">{currentTodo.title}</li>
                </ul>
                <button><Link to={`/todos/${currentTodo.id}`}>Details</Link></button>
                </div>
                // )
            ))}
        </div>
    )
}

export default ShowTodos;