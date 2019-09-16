import React, { useRef, useState } from "react";
import "../scss/todoModel.scss";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../actions/actions";
import TodoCalender from "./TodoCalender";
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

  const showTodoModel = () => {
    setShowModel(false);
    setShowPalette(false);
    setShowCalender(false);
  };
  const hideModel = () => {
    setShowPalette(false);
    setShowCalender(false);
    setShowModel(false);
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
      setTodo(ref.current.value);
      // setTodoObj(todoObj.item)
      dispatch(addTodoItem(todoObj));
      setShowModel(false);
      setShowPalette(false);
      setShowCalender(false);
    }
    ref.current.value = "";
  };

  return (
    <React.Fragment>
      <div
        className="todoModelOutside"
        style={showModel ? { display: "block" } : {}}
        onClick={showTodoModel}
      ></div>
      <div
        className="todoModelInside"
        style={showModel ? { display: "block" } : {}}
        // onClick={showTodoModel}
      >
        <input
          onChange={getInputVal}
          type="text"
          placeholder="Todo"
          ref={ref}
        ></input>
        <div className="btnSection">
          <div id="addBtn">
            <button onClick={addTodo}>Add</button>
            <p onClick={hideModel}>Cancel</p>
          </div>
          <div id="btnIcons">
            <i className="fas fa-palette" onClick={setPalette}></i>
            <i className="far fa-calendar-alt" onClick={setCalender}></i>
            <div
              className="palette"
              style={showPalette ? { transform: "scale(1)" } : {}}
            >
              <div id="clr"></div>
              <div id="clr"></div>
              <div id="clr"></div>
              <div id="clr"></div>
            </div>
            <div
              className="todoCalender"
              style={showCalender ? { display: "block" } : {}}
            >
              <TodoCalender setTodoDate={setTodoDate} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodoModel;
