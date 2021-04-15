import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav;