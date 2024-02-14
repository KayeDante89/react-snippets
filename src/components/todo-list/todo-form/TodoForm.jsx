import React, { useState } from "react";

import "./TodoForm.css";

function ToDoForm(props) {
  // Props
  const { addTodo } = props;

  // State
  const [todo, setTodo] = useState("");

  // Action
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo) {
      addTodo(todo); //adding to todo
      setTodo(""); //re-sets form so it's empty for the next input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form-input"
        type="text"
        placeholder="What should we do?"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
    </form>
  );
}

export default ToDoForm;
