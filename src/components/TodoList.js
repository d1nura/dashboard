import React, { useState, useEffect } from "react";
import "../scss/todoList.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeTodoItem } from "../actions/actions";

function TodoList() {
  const todos = useSelector(state => state);
  const [del, setDel] = useState(false);
  const dispatch = useDispatch();
  const removeTodo = e => {
    dispatch(removeTodoItem(e.target.innerText));
    setDel(true);
    setTimeout(() => setDel(false), 1);
  };

  useEffect(() => {}, [del]);

  return (
    <div className="todoList">
      {todos.map((item, index) => {
        return (
          <li
            key={index}
            style={
              item.color !== ""
                ? { borderLeft: `5px solid ${item.color}` }
                : { borderLeft: "5px solid rgb(250, 250, 250)" }
            }
          >
            <div className="correctBox" onClick={removeTodo}>
              <i className="fas fa-check">
                <span>{index}</span>
              </i>
            </div>
            <p>{item.Todo}</p>
            <h5>{item.date}</h5>
            <i id="editTodo" className="fas fa-ellipsis-v"></i>
          </li>
        );
      })}
    </div>
  );
}

export default TodoList;
