import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav id="side-nav">
      <ul id="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <p>Projects</p>
          <ul>
            <li>
              <Link to="/dictionary">Dictionary</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
