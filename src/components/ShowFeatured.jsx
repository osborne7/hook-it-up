import React, { useState, useEffect } from 'react';
// import { Match } from 'react-router-dom';

const ShowFeatured = (props) => {
    const [currentTodo, setTodo] = useState({});

    console.log(props.match.params.id);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${props.match.params.id}`)
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(todo => setTodo(todo));
    }, [props.match.params.id]);
    
    return(
        <div>
            <p>User ID: {currentTodo.userId}</p>
            <p>To do: {currentTodo.title}</p>
            <p>Complete: {currentTodo.completed}</p>

        </div>
    )
}

export default ShowFeatured;