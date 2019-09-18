import React, { useRef, useState } from "react";
import "../scss/todoModel.scss";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../actions/actions";
import TodoCalender from "./TodoCalender";
import ColorPalette from "./ColorPalette";
// import Calendar from "react-calendar/dist/entry.nostyle";

function TodoModel({ showModel, setShowModel }) {
  let ref = useRef(null);
  const [showPalette, setShowPalette] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [todoDate, setTodoDate] = useState();
  const [todoColor, setTodoColor] = useState();
  const [Todo, setTodo] = useState();
  const dispatch = useDispatch();

  const todoObj = {
    Todo: Todo,
    date: todoDate,
    color: todoColor
  };
  const resetInput = name => {
    if (name === "all") {
      setShowModel(false);
      setShowPalette(false);
      setShowCalender(false);
      ref.current.value = "";
      setTodoDate("");
      setTodoColor("");
    } else if (name) {
      ref.current.value = "";
      setTodoDate("");
      setTodoColor("");
    } else if (!name) {
      setShowModel(false);
      setShowPalette(false);
      setShowCalender(false);
    }
  };

  const hideModel = () => {
    resetInput("all");
  };
  const setPalette = () => {
    setShowPalette(showPalette ? false : true);
    setShowCalender(false);
  };
  const setCalender = () => {
    setShowCalender(showCalender ? false : true);
    setShowPalette(false);
  };

  const getInputVal = e => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    if (ref.current.value !== "") {
      dispatch(addTodoItem(todoObj));
      resetInput(false);
    }
    resetInput(true);
  };

  return (
    <React.Fragment>
      <div
        className="todoModelOutside"
        style={showModel ? { display: "block" } : {}}
        onClick={hideModel}
      ></div>
      <div
        className="todoModelInside"
        style={showModel ? { display: "block" } : {}}
      >
        <input
          onChange={getInputVal}
          type="text"
          placeholder="Todo"
          ref={ref}
        ></input>
        <div className="btnSection">
          <div id="addBtn">
            <button onClick={addTodo} style={{ background: `${todoColor}` }}>
              Add
            </button>
            <p onClick={hideModel}>Cancel</p>
          </div>
          <div id="btnIcons">
            <i
              style={{ color: `${todoColor}` }}
              className="fas fa-palette"
              onClick={setPalette}
            ></i>
            <i className="far fa-calendar-alt" onClick={setCalender}></i>
            <ColorPalette
              showPalette={showPalette}
              setTodoColor={setTodoColor}
              setShowPalette={setShowPalette}
            />
            <TodoCalender
              setTodoDate={setTodoDate}
              setShowCalender={setShowCalender}
              showCalender={showCalender}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodoModel;
