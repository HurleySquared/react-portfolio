import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div id="navbarNav container">
          <ul className="navbar-nav row">
            <li className="nav-item col-md">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item col-md">
              <Link className="nav-link" to="/Projects">Projects</Link>
            </li>
            <li className="nav-item col-md">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav;