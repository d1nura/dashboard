import React from "react";

function ColorPalette({ showPalette, setTodoColor, setShowPalette }) {
  const getColors = e => {
    console.log(e.target.style.background);
    setTodoColor(e.target.style.background);
    setShowPalette(false);
  };
  return (
    <div
      className="palette"
      style={showPalette ? { transform: "scale(1)" } : {}}
      onClick={getColors}
    >
      <div id="clr" style={{ background: "orangered" }}></div>
      <div id="clr" style={{ background: "greenyellow" }}></div>
      <div id="clr" style={{ background: "yellow" }}></div>
      <div id="clr" style={{ background: "lightskyblue" }}></div>
    </div>
  );
}

export default ColorPalette;
