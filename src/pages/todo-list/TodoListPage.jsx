import React, { useState } from 'react'
import './TodoListPage.css'
import ToDoItem from '../../components/todo-list/todo-item/TodoItem';
import ToDoForm from '../../components/todo-list/todo-form/TodoForm';

function TodoListPage() {
  const [ todos, setTodos ] = useState([
    {
      text: "Learn React",
      isCompleted: false,
      isImportant: false,
    },
    {
      text: "Build a really cool app",
      isCompleted: false,
      isImportant: false,
    },
    {
      text: "Drink coffee",
      isCompleted: false,
      isImportant: false,
    }
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]; // ... takes out items in array, copies it and expands it
    setTodos(newTodos);
  };

  const moveUp = (index) => {
    const newTodos = [...todos];
    if (index > 0) {
      [newTodos[index], newTodos[index - 1]] = [
        newTodos[index - 1],
        newTodos[index],
      ];
      setTodos(newTodos);
    }
  };

  const moveDown = (index) => {
    const newTodos = [...todos];
    if (index < newTodos.length - 1) {
      // https://stackoverflow.com/a/872317
      [newTodos[index], newTodos[index + 1]] = [
        newTodos[index + 1],
        newTodos[index],
      ];
      setTodos(newTodos);
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos); // update State
  };

  const markImportant = (index) => {
    const newTodos = [...todos];
    newTodos[index].isImportant = !newTodos[index].isImportant;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]; // create new array
    newTodos.splice(index, 1); // remove element from array and insert element in place
    setTodos(newTodos);
  };

  return (
    <div className="page-margin">
      <h1>To Do List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            moveUp={moveUp}
            moveDown={moveDown}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            markImportant={markImportant}
          />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );



}

export default TodoListPage;