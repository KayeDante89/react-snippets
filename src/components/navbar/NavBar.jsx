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
          <p style={{color: '#838189', borderBottom: '0.5px solid black', paddingBottom: '12px'}}>Projects</p>
          <ul>
            <li>
              <Link to="/dictionary">Dictionary</Link>
            </li>
            <li>
              <Link to="/pokemon-search">Pokemon Search</Link>
            </li>
            <li>
              <Link to="/todo-list">To-do List</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
