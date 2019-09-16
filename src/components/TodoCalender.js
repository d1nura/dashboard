import React, { useState } from "react";
import Calendar from "react-calendar";

function TodoCalender() {
  const [date, setDate] = useState();
  const selectDate = date => {
    setDate(date);
    console.log(date.getFullYear());
  };
  return (
    <Calendar className="calenderStyle" onChange={selectDate} value={date} />
  );
}

export default TodoCalender;
