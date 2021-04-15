import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div id="navbarNav container">
          <ul className="navbar-nav row">
            <li className="nav-item col-sm">
              <Link className="navbar-brand" to="/">Home</Link>
            </li>
            <li className="nav-item col-sm">
              <Link className="nav-link" to="/Projects">Projects</Link>
            </li>
            <li className="nav-item col-sm">
              <Link className="nav-link" to="/Contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav;