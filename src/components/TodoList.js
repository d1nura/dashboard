import React from "react";
import "../scss/todoList.scss";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector(state => state);
  return (
    <div className="todoList">
      {todos.map((item, index) => {
        return <li>{item.item}</li>;
      })}
    </div>
  );
}

export default TodoList;
