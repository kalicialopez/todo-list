import React, { useState } from "react";

function ToDoForm(props) {
// Props
    const { addTodo } = props;

// State

// we are creating a state and attaching it to the input. The value of the input is the todo state. 
    const [todo, setTodo] = useState("");

// Action
//if to do exists (is truthy), pass it through 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo) {
            addTodo(todo);
            setTodo("");
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add todo here... " value = {todo} onChange={(event) => setTodo(event.target.value)} />
        </form>
    );
}

export default ToDoForm;
