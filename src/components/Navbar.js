import React, { useState } from "react";
import "../scss/navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [hide, setHide] = useState(false);
  const toggleMenu = () => {
    setHide(hide ? false : true);
  };
  return (
    <React.Fragment>
      <nav className="navbar" id={hide ? "hideMenu" : ""}>
        <div className="closeMenu" onClick={toggleMenu}>
          <i
            className="fas fa-arrow-left"
            style={hide ? { transform: "rotate(180deg)" } : {}}
          ></i>
        </div>
        <div className="anchorTags">
          <Link to="/">
            <div className="aBlocs">
              <i className="fas fa-house-damage"></i>
              <span id="sp">Home</span>
            </div>
          </Link>

          <Link to="/todos">
            <div className="aBlocs">
              <i className="fas fa-clipboard-list"></i>
              <span id="sp">Todos</span>
            </div>
          </Link>

          <Link to="/wheather">
            <div className="aBlocs">
              <i className="fas fa-cloud-showers-heavy"></i>
              <span id="sp">Wheather</span>
            </div>
          </Link>

          <Link to="/maps">
            <div className="aBlocs">
              <i className="fas fa-map-marker-alt"></i>
              <span id="sp">Maps</span>
            </div>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
