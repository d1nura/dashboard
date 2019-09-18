import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import "../scss/compBox.scss";
import Todo from "./Todo";
import Wheather from "./Wheather";

function CompBox() {
  return (
    <div className="compBox">
      <BrowserRouter>
        <Navbar />
        <div className="compHolder">
          <Route path="/" exact component={Home} />
          <Route path="/todos" component={Todo} />
          <Route path="/wheather" component={Wheather} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default CompBox;
