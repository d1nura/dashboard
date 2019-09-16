import React, { useState } from "react";
import "../scss/todo.scss";
import TodoModel from "./TodoModel";
import TodoList from "./TodoList";

function Todo() {
  const [showModel, setShowModel] = useState(false);
  const showTodoModel = () => {
    setShowModel(true);
  };
  return (
    <div className="todo">
      <div className="createTodo">
        <h1>Create Todo's</h1>
        <button onClick={showTodoModel}>
          <i className="fas fa-plus"></i>Add Todo
        </button>
      </div>
      <TodoList />
      <TodoModel showModel={showModel} setShowModel={setShowModel} />
    </div>
  );
}

export default Todo;
