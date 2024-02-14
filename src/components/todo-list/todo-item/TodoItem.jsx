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
  } = props;

  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      {todo.text}
      <div>
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
