import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import "../scss/compBox.scss";
import Todo from "./Todo";

function CompBox() {
  return (
    <div className="compBox">
      <BrowserRouter>
        <Navbar />
        <div className="compHolder">
          <Route path="/" exact component={Home} />
          <Route path="/todos" component={Todo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default CompBox;
