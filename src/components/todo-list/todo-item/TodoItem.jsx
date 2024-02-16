import React from "react";

import "./TodoItem.css";

function ToDoItem(props) {
  const {
    todo,
    index,
    completeTodo,
    moveUp,
    moveDown,
    removeTodo,
    markImportant
  } = props;

  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""} ${todo.isImportant ? "important" : ""}`}>
      {todo.text}
      <div>
        <button onClick={() => markImportant(index)}>{todo.isImportant ? "Not Important" : "Important"}</button>
        <button onClick={() => moveUp(index)}>&uarr;</button>
        <button onClick={() => moveDown(index)}>&darr;</button>
        <button onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "Undo" : "Done"}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default ToDoItem;
