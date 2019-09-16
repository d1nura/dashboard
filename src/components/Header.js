import React from "react";
import "../scss/header.scss";
import dash from "../pics/dash.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={dash} alt="logo"></img>
      </div>
      <div className="searchBarHolder">
        <div id="searchBarCol">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
    </header>
  );
}

export default Header;
