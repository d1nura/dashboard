import React, { useState } from "react";
import Calendar from "react-calendar";

function TodoCalender({ setTodoDate, setShowCalender, showCalender }) {
  const [date, setDate] = useState();
  let monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const selectDate = date => {
    let d = `${
      monthArr[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}  `;
    setDate(date);
    setTodoDate(d);
    setShowCalender(false);
  };
  return (
    <div
      className="todoCalender"
      style={showCalender ? { display: "block" } : {}}
    >
      <Calendar className="calenderStyle" onChange={selectDate} value={date} />
    </div>
  );
}

export default TodoCalender;
