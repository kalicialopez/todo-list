import React, { useState } from "react";

// Components
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

function App() {

  // State
  const [todos, setTodos] = useState([
    "Happy Panda",
    "Sad Panda",
  ])


 // Actions
 const addTodo = (text) => {
  const newTodos = [...todos, text];
  setTodos(newTodos);
};
 

  return (
    <div>
      <h1>ToDo List</h1>
      {todos.map((todo, index) => (
        <ToDoItem key = {index} todo={todo} />
      ))}
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

//... is adding items from an array into an existing array without it taking the first item in an array.
